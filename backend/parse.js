const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://egov.kz/cms/ru/articles/2Fspisok_wkol_rk';

axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    const cities = [];

    $('.city-section-class').each((i, elem) => { 
      const cityName = $(elem).find('h2').text().trim();
      const schools = [];

      $(elem).find('tr').each((j, row) => {
        const columns = $(row).find('td');
        if (columns.length) {
          const school = {
            name: $(columns[0]).text().trim(),
            address: $(columns[1]).text().trim(),
            language: $(columns[2]).text().trim(),
            director: $(columns[3]).text().trim(),
            work_phone: $(columns[4]).text().trim(),
            cell_phone: $(columns[5]).text().trim(),
          };
          schools.push(school);
        }
      });

      cities.push({ city: cityName, schools });
    });

    fs.writeFileSync('schools.json', JSON.stringify(cities, null, 2), 'utf-8');
    console.log('Data saved to schools.json');
  })
  .catch(error => {
    console.error('Error fetching the webpage:', error);
  });
