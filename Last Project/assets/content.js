const formalEduArray = [
    "(2005 - 2006) - Tinder Garden Al-Wildan Makassar",
    "(2006 - 2012) - Elementary School Inpres Tamalanrea 2 Makassar",
    "(2012 - 2015) - Junior High School Plus Al-Ashri Makassar",
    "(2015 - 2018) - Vocational High School of Telkom Makassar",
    "(2018 - Now) - Electronic Engineering Polytechnic Institute of Surabaya"
];

const unformalEduArray = [
    "2017 - Cisco Networking Academy - Network Essential",
    "2018 - LKMM - Pra Tingkat Dasar",
    "2019 - LKMM - Tingkat Dasar",
    "2019 - Digitalent Shoolarship - Junior Network Administrator",
    "2021 - Dicoding - Cloud Practitioner Essentials",
    "2021 - Dicoding - Architecting on AWS",
    "2021 - Digitalent Shoolarship - Junior Network Administrator",
    "2021 - Dicoding - Belajar Dasar Pemrograman JavasCript",
    "2021 - Dicoding - Belajar Membuat Aplikasi Back-End Pemula",
    "2021 - Dicoding - Belajar Fundamental Aplikasi Back-End",
    "2021 - Dicoding - Belajar Dasar Visualisasi Data",
    "2022 - Dicoding - BANGKIT Cloud Computing"
];

const organization = [
    "(2016 - 2017) - Student Counctil Adminstrator - Religious Field",
    "(2016 - 2017) - Head of Spirtual Extracurricular",
    "(2018 - 2019) - Entrepreneurial young staff IT student association",
    "(2020 - 2021) - Head of the UKKI Department of Business and Funds",
    "(2021 - 2022) - Deployment Mentor at PENS Fest 2022"
];

let list = document.getElementById("list-formal-edu");
addText(formalEduArray);

list = document.getElementById("list-unformal-edu");
addText(unformalEduArray);

list = document.getElementById("list-organization");
addText(organization);

function addText(array) {
    for (var i = 0; i < array.length; i++) {
        const listItem = document.createElement("LI");
        listItem.textContent = array[i];
        list.appendChild(listItem);
    }
}