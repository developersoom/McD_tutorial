const cheerio = require('cheerio');
const axios = require('axios');

// const url = "https://www.mcdelivery.co.kr/kr/browse/menu.html?daypartId=1&catId=11";
async function getData(url) {
  return axios.get(url)
    .then((response) => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        let menuList = [];
        $('.panel-product').each(function (i, elem) {
          menuList[i] = {
            name: $(this).find('h5').text(),
            img: $(this).find('.panel-body').find('img').attr('src'),
            price: $(this).find('.starting-price').text(),
            cal: $(this).find('.product-nutritional-info').find('.text-default').text()
          }
        });
        return menuList;
      } (error) => console.log(err);
    })
}

export default {
  getData
};