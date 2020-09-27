import pytest
from ..scrape import scrape_pdfs


def test_scrape_runs_sept_25():
    cases_url_sept_25 = "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20County%20Data/County%20Case%20Counts_9-25-2020.pdf"
    deaths_url_sept_25 = "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20Death%20Data/Death%20by%20County%20of%20Residence%20--%202020-09-25.pdf"

    result = scrape_pdfs(cases_url_sept_25, deaths_url_sept_25)
    print(result)


def test_scrape_runs_sept_26():
    cases_url_sept_25 = "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20County%20Data/County%20Case%20Counts_9-26-2020.pdf"
    deaths_url_sept_25 = "https://www.health.pa.gov/topics/Documents/Diseases%20and%20Conditions/COVID-19%20Death%20Data/Death%20by%20County%20of%20Residence%20--%202020-09-26.pdf"

    result = scrape_pdfs(cases_url_sept_25, deaths_url_sept_25)
    print(result)