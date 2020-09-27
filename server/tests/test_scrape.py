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
    cases_url = "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20County%20Data/County%20Case%20Counts_9-26-2020.pdf"
    deaths_url = "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20Death%20Data/Death%20by%20County%20of%20Residence%20--%202020-09-26.pdf"

    result = scrape_pdfs(cases_url, deaths_url)
    print(result)