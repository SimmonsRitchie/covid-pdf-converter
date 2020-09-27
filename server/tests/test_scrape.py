import pytest
from ..scrape import scrape_pdfs


def test_scrape_runs_sept_19():
    cases_url = "https://interactives.data.spotlightpa.org/assets/covid-pdf-converter/sample/sample__county-cases__2020-09-19.pdf"
    deaths_url = "https://interactives.data.spotlightpa.org/assets/covid-pdf-converter/sample/sample__county-deaths__2020-09-19.pdf"
    result = scrape_pdfs(cases_url, deaths_url)
    print(result)


def test_scrape_runs_sept_25():
    cases_url = "https://interactives.data.spotlightpa.org/assets/covid-pdf-converter/sample/sample__county-cases__2020-09-25.pdf"
    deaths_url = "https://interactives.data.spotlightpa.org/assets/covid-pdf-converter/sample/sample__county-deaths__2020-09-25.pdf"
    result = scrape_pdfs(cases_url, deaths_url)
    print(result)


def test_scrape_runs_sept_26():
    cases_url = "https://interactives.data.spotlightpa.org/assets/covid-pdf-converter/sample/sample__county-cases__2020-09-26.pdf"
    deaths_url = "https://interactives.data.spotlightpa.org/assets/covid-pdf-converter/sample/sample__county-deaths__2020-09-26.pdf"

    result = scrape_pdfs(cases_url, deaths_url)
    print(result)