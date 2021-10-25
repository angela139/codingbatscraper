import requests
from bs4 import BeautifulSoup
from operator import itemgetter


def student_data(email, password, url):
    login_info = {
        'uname': email,
        'pw': password,
        'dologin': 'log in',
        'fromurl': '/java'
    }

    LOGIN_URL = "https://codingbat.com/login"
    page_filter = url + "&form="
    REPORT_URL = "https://codingbat.com/report?java=on&stock=on&custom=on&sortname=on&homepath=%2Fhome%2Fsimona1%40sfusd.edu%2F" + page_filter
    info_array = []

    with requests.Session() as s:
        try:
            s.post(LOGIN_URL, data=login_info)
            r = s.get(REPORT_URL)
            soup = BeautifulSoup(r.text, 'html.parser')
            progress_table = soup.find_all("table")[2]
            starting_row = progress_table.find_all("tr")[1]
            num_problems = len(starting_row.find_all("td")[2:-1])

            for rows in progress_table.find_all("tr")[1:]:
                name_string = rows.find_all("td")[1].get_text()
                name = ""
                block = 0
                for char in name_string:
                    if char.isdigit():
                        block = char
                    elif char == ",":
                        name += ""
                    else:
                        name += char
                total_done = rows.find_all("td")[-1].get_text()
                info_array.append({"block": block, "name": name.strip().replace(" ", ", "), "total": total_done})

            for value in info_array:
                if int(value["total"]) == num_problems:
                    value["status"] = "Done"
                else:
                    value["status"] = "Not Done"

            info_array = sorted(info_array, key=itemgetter('block', 'status', 'name'))

        except:
            print("Error")

    return info_array
