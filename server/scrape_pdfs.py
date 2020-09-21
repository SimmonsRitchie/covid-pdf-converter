import logging
import tabula
from pathlib import Path
import requests
import urllib.parse
import pandas as pd
from io import BytesIO

DIR_OUTPUT = "./output"


def get_data(url, multiple_tables=False, tabula_options=""):
    print(f"Downloading PDF at: {url}")
    response = requests.get(url)
    print("PDF downloaded")
    print("Converting PDF with tabula...")
    list_of_dfs = tabula.read_pdf(
        BytesIO(response.content),
        pages="all",
        multiple_tables=multiple_tables,
        options=tabula_options,
    )
    print("PDF converted")
    return list_of_dfs


def scrape_pdfs(cases_url, deaths_url):

    # cases
    df_cases = get_data(cases_url)[0]
    df_cases["County"] = df_cases["County"].str.lower()

    # deaths
    df_deaths = get_data(deaths_url, multiple_tables=False, tabula_options="-t")[0]
    df_deaths["County"] = df_deaths["County"].str.lower()
    df_deaths = df_deaths.rename(
        columns={
            "# of Deaths": "Deaths",
            "County Population1": "County Population",
            "Rate2": "Rate",
        }
    )
    df_deaths["Deaths"] = pd.to_numeric(df_deaths["Deaths"])
    df_deaths["County Population"] = df_deaths["County Population"].str.replace(",", "")
    df_deaths["County Population"] = pd.to_numeric(df_deaths["County Population"])

    # merge and clean
    df = df_cases.merge(df_deaths, how="left", on="County")
    df.fillna(0, inplace=True)
    df["County Population"] = df["County Population"].astype(int)
    df["Deaths"] = df["Deaths"].astype(int)
    df["County"] = df["County"].str.capitalize()
    df["County"] = df["County"].str.replace("Mckean", "McKean")
    df = df.drop(columns=["Region", "County Population", "Rate"])
    df["Tests"] = df["Confirmed"] + df["PersonsWithNegativePCR"]
    df.set_index("County", inplace=True)
    df = df.transpose()
    df["Total"] = df.sum(axis=1)
    return df.to_dict("index")
