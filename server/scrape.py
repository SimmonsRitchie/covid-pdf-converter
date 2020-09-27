import logging
import tabula
from pathlib import Path
import requests
import urllib.parse
import pandas as pd
from io import BytesIO

DIR_OUTPUT = "./output"


def get_data(url, multiple_tables=False, tabula_options="", pandas_options=None):
    print(f"Downloading PDF at: {url}")
    response = requests.get(url)
    print("PDF downloaded")
    print("Converting PDF with tabula...")
    list_of_dfs = tabula.read_pdf(
        BytesIO(response.content),
        pages="all",
        multiple_tables=multiple_tables,
        options=tabula_options,
        pandas_options=pandas_options,
    )
    print("PDF converted")
    return list_of_dfs


def scrape_pdfs(cases_url, deaths_url):

    # cases
    df_cases = get_data(
        cases_url,
        pandas_options={
            "dtype": {
                "County": str,
                "Region": str,
                "Cases": int,
                "Confirmed": int,
                "Probable": int,
                "PersonsWithNegativePCR": int,
            },
            "thousands": ",",
        },
    )[0]
    df_cases["County"] = df_cases["County"].str.lower()
    print(df_cases)

    # deaths
    df_deaths = get_data(
        deaths_url,
        multiple_tables=False,
        tabula_options="-t",
        pandas_options={
            "dtype": {
                "# of Deaths": float,
                "County Population1": float,
                "Rate2": float,
            },
            # Handle situations where header is duplicated
            "na_values": {
                "County": "County",
                "# of Deaths": "# of Deaths",
                "County Population1": "County Population1",
                "Rate2": "Rate2",
            },
            "thousands": ",",
            "decimal": ".",
        },
    )[0]
    df_deaths["County"] = df_deaths["County"].str.lower()
    df_deaths = df_deaths.rename(
        columns={
            "# of Deaths": "Deaths",
            "County Population1": "County Population",
            "Rate2": "Rate",
        }
    )
    print(df_deaths)

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
