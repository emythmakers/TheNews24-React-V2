'use strict';

var express = require('express');
var fs = require('fs');
var path = require("path");

var app = express();
var bodyParser = require('body-parser');

const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

var http = require('http');
var httpServer = http.createServer(app);

// Initialize DB configurations cleanly
const dbConfig = require("./ssr/dbCon/dbConfig");
const enConfig = dbConfig.enConfig();
const mediaConfig = dbConfig.mediaConfig();
const genConfig = dbConfig.genConfig();

var FEndPort = 3400;
var FEndUrl = 'https://www.thenews24.com/english';
var BEndUrl = 'https://backoffice.thenews24.com/';

app.get('/english', function (request, response) {
    console.log('English Home page  visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', async function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'The News 24 || দ্য নিউজ ২৪');
        data = data.replace(/\$OG_DESCRIPTION/g, "The News 24 || দ্য নিউজ ২৪");
        data = data.replace(/\$OG_KEYWORDS/g, "The News 24, দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/aboutUs', function (request, response) {
    console.log('aboutUs page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', async function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'দ্য নিউজ ২৪ :: আমাদের সম্পর্কে');
        data = data.replace(/\$OG_DESCRIPTION/g, "দ্য নিউজ ২৪ :: আমাদের সম্পর্কে");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/live', function (request, response) {
    console.log('English live page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', async function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'দ্য নিউজ ২৪ :: লাইভ');
        data = data.replace(/\$OG_DESCRIPTION/g, "দ্য নিউজ ২৪ :: লাইভ");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/pollresult', function (request, response) {
    console.log('English poll result page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', async function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'দ্য নিউজ ২৪ :: অনলাইন জরিপ');
        data = data.replace(/\$OG_DESCRIPTION/g, "দ্য নিউজ ২৪ :: অনলাইন জরিপ");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/privacy-policy', function (request, response) {
    console.log('English privacy-policy page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'দ্য নিউজ ২৪ :: Privacy Policy');
        data = data.replace(/\$OG_DESCRIPTION/g, "দ্য নিউজ ২৪ :: Privacy Policy");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/terms-service', function (request, response) {
    console.log('English terms-conditions page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'দ্য নিউজ ২৪ :: Terms & Conditions');
        data = data.replace(/\$OG_DESCRIPTION/g, "দ্য নিউজ ২৪ :: Terms & Conditions");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/the-news', function (request, response) {
    console.log('English the news page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'দ্য নিউজ :: দ্য নিউজ ২৪');
        data = data.replace(/\$OG_DESCRIPTION/g, "দ্য নিউজ :: দ্য নিউজ ২৪");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/contact-us', function (request, response) {
    console.log('English the contact us page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'যোগাযোগ করুন :: দ্য নিউজ ২৪');
        data = data.replace(/\$OG_DESCRIPTION/g, "যোগাযোগ করুন :: দ্য নিউজ ২৪");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/advertise', function (request, response) {
    console.log('English the Advertise page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'Advertise :: The News 24');
        data = data.replace(/\$OG_DESCRIPTION/g, "Advertise :: The News 24");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/editorial-policy', function (request, response) {
    console.log('English the Editorial Policy page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'Editorial Policy :: The News 24');
        data = data.replace(/\$OG_DESCRIPTION/g, "Editorial Policy :: The News 24");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/copyright', function (request, response) {
    console.log('English the copyright page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'Copyright :: The News 24');
        data = data.replace(/\$OG_DESCRIPTION/g, "Copyright :: The News 24");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/reader-right', function (request, response) {
    console.log('English the reader right page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'Reader Right :: The News 24');
        data = data.replace(/\$OG_DESCRIPTION/g, "Reader Right :: The News 24");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/fileComplaint', function (request, response) {
    console.log('English the file Complaint page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'File Complaint :: The News 24');
        data = data.replace(/\$OG_DESCRIPTION/g, "File Complaint :: The News 24");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/sitemep', function (request, response) {
    console.log('the Sitemep page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'সাইট ম্যাপ :: দ্য নিউজ ২৪');
        data = data.replace(/\$OG_DESCRIPTION/g, "সাইট ম্যাপ :: দ্য নিউজ ২৪");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/subscription', function (request, response) {
    console.log('the subscription page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'সাবস্ক্রিপশন :: দ্য নিউজ ২৪');
        data = data.replace(/\$OG_DESCRIPTION/g, "সাবস্ক্রিপশন :: দ্য নিউজ ২৪");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/all_tags', function (request, response) {
    console.log('all_tags page english visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', async function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'The News 24 :: All Tag Lists');
        data = data.replace(/\$OG_DESCRIPTION/g, "The News 24 :: All Tag Lists");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/all_writers', function (request, response) {
    console.log('all_writers page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', async function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'The News 24 :: All Writers');
        data = data.replace(/\$OG_DESCRIPTION/g, "The News 24 :: All Writers");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/english/archives', function (request, response) {
    console.log('archive page english visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', async function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, `index, follow`);
        data = data.replace(/\$OG_TITLE/g, 'Archive :: The News 24');
        data = data.replace(/\$OG_DESCRIPTION/g, "Archive :: The News 24");
        data = data.replace(/\$OG_KEYWORDS/g, "দ্য নিউজ ২৪...");
        data = data.replace(/\$OG_IMAGE/g, `${BEndUrl}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
    	data = data.replace(/\$AMP_URL/g, '');
        response.send(data);
    });
});

app.get('/sitemap/static-sitemap.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('static-sitemap.xml visited!');
    const filePath = path.resolve(__dirname, './sitemap', 'sitemap.xml');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/sitemap/category-sitemap.xml', async function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('sitemap/category-sitemap.xml visited!');
    let sql = `SELECT CategoryID, ParentID, CategoryName, Slug, created_at, updated_at FROM en_bas_categories WHERE ShowData=1 AND Deletable=1 ORDER BY CategoryID ASC;`;
    try {
        const queryData = await enConfig.query( sql );
        let xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
        let cats = []
        if (queryData && queryData.length > 0) {
            for (let i = 0; i < queryData.length; i++) {
                cats[queryData[i].CategoryID] = queryData[i].Slug
                let lastmoddate = queryData[i].updated_at ? queryData[i].updated_at : queryData[i].created_at;
                let moddate = new Date(lastmoddate)
                xml += `<url>
                    <loc>${FEndUrl}${queryData[i].ParentID==0 ? queryData[i].Slug : cats[queryData[i].ParentID]+'/'+queryData[i].Slug}</loc>
                    <lastmod>${moddate.toISOString()}</lastmod>
                    <changefreq>hourly</changefreq> 
                    <priority>0.80</priority>
                </url>`
                if (i == queryData.length - 1) {
                    xml += `</urlset>`;
                    response.send(xml);
                }
            }
        }else{
            xml += `</urlset>`;
            response.send(xml);
        }
    }catch (err) {
        console.log('sitemap error', err);
        let xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
        response.send(xml);
    }
});

app.get('/sitemap-en/:sitemap', async function (request, response) {
    let sitemap = request.params.sitemap
    console.log(`sitemap-en/${sitemap} visited!`);
    if (!sitemap || !sitemap.includes("sitemap-en-")) {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
    let c = sitemap.replace('sitemap-en-', '').replace('.xml', '')
    let offset = c > 0 ? ` OFFSET ${((c - 1) / 2) * 10}000 ` : '';
    if (!offset) return response.send({ error: true, message: 'Invalid Sitemap Request' });

    response.setHeader('Content-Type', 'application/xml');
    let sql = `SELECT en_contents.ContentID, en_contents.ContentHeading, en_contents.ImageSmPath, en_contents.ImageBgPath, en_contents.ImageBgPathCaption, en_contents.created_at, en_contents.updated_at, en_contents.URLAlies, DATE_FORMAT(en_contents.created_at, "%Y-%m-%d") as fcreated_at, DATE_FORMAT(en_contents.updated_at, "%Y-%m-%d") as fupdated_at, en_bas_categories.Slug FROM en_contents INNER JOIN en_bas_categories ON en_contents.CategoryIDs=en_bas_categories.CategoryID WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 ORDER BY en_contents.ContentID ASC LIMIT 5000 ${offset}`;
    try {
        const queryData = await enConfig.query( sql );
        if (queryData && queryData.length > 0) {
            let xml = `<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
            for (let i = 0; i < queryData.length; i++) {
                let lastmoddate = (queryData[i].updated_at && queryData[i].updated_at != '0000-00-00 00:00:00') ? queryData[i].updated_at : queryData[i].created_at;
                let moddate = new Date(lastmoddate)
                xml += `<url>
                <loc>${FEndUrl}/${queryData[i].Slug}/news/${queryData[i].ContentID}</loc>
                    <image:image>
                        <image:loc>${BEndUrl}media/imgAll/${queryData[i].ImageBgPath}</image:loc>
                        <image:caption><![CDATA[ ${queryData[i].ImageBgPathCaption ? (queryData[i].ImageBgPathCaption).replace(/&/g, "&amp;") : (queryData[i].ContentHeading).replace(/&lsquo;/g, "").replace(/&rsquo;/g, "").replace(/&/g, "&amp;")} ]]></image:caption>
                    </image:image>
                    <lastmod>${moddate.toISOString()}</lastmod>
                </url>`
                if (i == queryData.length - 1) {
                    xml += `</urlset>`;
                    response.send(xml);
                }
            }
        } else {
            let xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
            response.send(xml);
        }
    }catch (err) {
        console.log('sitemap error', err);
        let xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
        response.send(xml);
    }
});

app.get('/sitemap/:dailysitemap', async function (request, response) {
    let dailysitemap = request.params.dailysitemap
    if (!dailysitemap || !dailysitemap.includes("sitemap-daily-")) {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
    let date = dailysitemap.replace('sitemap-daily-', '').replace('.xml', '')
    let datearr = date.split("-")
    let date_ob = new Date(date);
    if (!isNaN(date_ob) && datearr.length === 3 && datearr[0].length === 4 && datearr[1].length === 2 && datearr[2].length === 2) {
        response.setHeader('Content-Type', 'application/xml');
        let PhotoFeatureData;
        try {
            let photosql = `SELECT photo_features.PhotoFeatureID, photo_features.PhotoFeatureTitle, photo_features.ImageSmPath, photo_features.ImageBgPath, photo_features.Caption, photo_features.created_at, photo_features.updated_at FROM photo_features WHERE photo_features.Deletable=1 AND DATE(photo_features.created_at) = ? ORDER BY photo_features.PhotoFeatureID DESC`
            PhotoFeatureData = await mediaConfig.query( photosql, [date] );
        } catch (err) { 
            console.log('PhotoFeature error'); 
            return response.send('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>'); 
        }

        let sql = `SELECT en_contents.ContentID, en_contents.ContentHeading, en_contents.ImageBgPath, en_contents.ImageBgPathCaption, en_contents.created_at, en_contents.updated_at, en_bas_categories.Slug FROM en_contents INNER JOIN en_bas_categories ON en_contents.CategoryIDs=en_bas_categories.CategoryID WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 AND DATE(en_contents.created_at) = ? ORDER BY en_contents.ContentID DESC`;
        try {
            const queryData = await enConfig.query( sql, [date] );
            let xml = `<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
            if (queryData && queryData.length > 0) {
                for (let i = 0; i < queryData.length; i++) {
                    let lastmoddate = queryData[i].updated_at ? queryData[i].updated_at : queryData[i].created_at;
                    let moddate = new Date(lastmoddate)
                    xml += `<url>
                        <loc>${FEndUrl}/${queryData[i].Slug}/news/${queryData[i].ContentID}</loc>
                        <image:image>
                            <image:loc>${BEndUrl}media/imgAll/${queryData[i].ImageBgPath}</image:loc>
                            <image:caption><![CDATA[ ${queryData[i].ImageBgPathCaption ? (queryData[i].ImageBgPathCaption).replace("&", "&amp;") : (queryData[i].ContentHeading).replace("&", "&amp;")} ]]></image:caption>
                        </image:image>
                        <changefreq>hourly</changefreq>
                        <lastmod>${moddate.toISOString()}</lastmod>
                    </url>`
                }
            }
            if (PhotoFeatureData && PhotoFeatureData.length > 0) {
                for (let i = 0; i < PhotoFeatureData.length; i++) {
                    let lastmoddate = (PhotoFeatureData[i].updated_at && PhotoFeatureData[i].updated_at != '0000-00-00 00:00:00') ? PhotoFeatureData[i].updated_at : PhotoFeatureData[i].created_at;
                    let moddate = new Date(lastmoddate)
                    xml += `<url>
                    <loc>${FEndUrl}photo-feature/news/${PhotoFeatureData[i].PhotoFeatureID}</loc>
                        <image:image>
                            <image:loc>${PhotoFeatureData[i].ImageBgPath ? BEndUrl+'media/imgAll/' + (PhotoFeatureData[i].ImageBgPath).replace(/&/g, "%26") : (PhotoFeatureData[i].ImageSmPath ? BEndUrl+'media/imgAll/' + (PhotoFeatureData[i].ImageSmPath).replace(/&/g, "%26") : BEndUrl+'media/common/logo-fb.png')}</image:loc>
                            <image:caption><![CDATA[ ${PhotoFeatureData[i].Caption ? (PhotoFeatureData[i].Caption).replace(/&/g, "&amp;") : (PhotoFeatureData[i].PhotoFeatureTitle).replace(/&/g, "&amp;")} ]]></image:caption>
                        </image:image>
                        <changefreq>hourly</changefreq>
                        <lastmod>${moddate.toISOString()}</lastmod>
                    </url>`
                }
            }
            xml += `</urlset>`;
            response.send(xml);
        }catch (err) {
            console.log('sitemap processing error', err);
            response.send(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`);
        }
    } else {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
});

app.get('/sitemap-video/:sitemap', async function (request, response) {
    let sitemap = request.params.sitemap
    if (!sitemap || !sitemap.includes("sitemap-video-")) {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
    let c = sitemap.replace('sitemap-video-', '').replace('.xml', '')
    let offset = ` OFFSET ${((c - 1) / 2) * 10000} `;
    response.setHeader('Content-Type', 'application/xml');

    let sql = `SELECT WebTVID, WebTVHeading, WebTVType, WebTVLinkCode, SourceType, Remarks, created_at, updated_at FROM tv_webtvs WHERE Deletable=1 ORDER BY WebTVID ASC LIMIT 5000 ${offset}`;
    try {
        const queryData = await mediaConfig.query( sql );
        if (queryData && queryData.length > 0) {
            let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;
            for (let i = 0; i < queryData.length; i++) {
                let lastmoddate = (queryData[i].updated_at && queryData[i].updated_at != '0000-00-00 00:00:00') ? queryData[i].updated_at : queryData[i].created_at;
                let moddate = new Date(lastmoddate)
                xml += `<url>
                    <loc>${FEndUrl}video/show/${queryData[i].WebTVID}</loc>
                    <video:video>
                    <video:thumbnail_loc>https://img.youtube.com/vi/${queryData[i].WebTVLinkCode}/0.jpg</video:thumbnail_loc>
                    <video:title><![CDATA[ ${queryData[i].WebTVHeading} ]]></video:title>
                    <video:description><![CDATA[ ${queryData[i].Remarks ? queryData[i].Remarks : queryData[i].WebTVHeading} ]]></video:description>
                    <video:player_loc><![CDATA[ ${queryData[i].SourceType == 1 ? "https://www.youtube.com/embed/" + queryData[i].WebTVLinkCode + "?autoplay=1" : queryData[i].SourceType == 2 ? "https://www.facebook.com/plugins/video.php?href=" + queryData[i].WebTVLinkCode : ''} ]]></video:player_loc>
                    <video:publication_date>${moddate.toISOString()}</video:publication_date>
                    <video:family_friendly>yes</video:family_friendly>
                    <video:live>${queryData[i].WebTVType == 2 ? 'yes' : 'no'}</video:live>
                    </video:video>
                </url>`
                if (i == queryData.length - 1) {
                    xml += `</urlset>`;
                    response.send(xml);
                }
            }
        } else {
            response.send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`);
        }
    }catch (err) {
        console.log('video sitemap error', err);
        response.send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`);
    }
});

app.get('/sitemap-index.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    let xml = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${FEndUrl}sitemap/static-sitemap.xml</loc></sitemap><sitemap><loc>${FEndUrl}sitemap/category-sitemap.xml</loc></sitemap>`
    var todate = new Date()
    xml += `<sitemap><loc>${FEndUrl}sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml</loc><lastmod>${todate.toISOString()}</lastmod></sitemap>`
    response.send(xml + `</sitemapindex>`);
});

app.get('/robots.txt', function (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    let xml = `User-agent: *\nAllow: /\n\nSitemap: ${FEndUrl}sitemap/static-sitemap.xml\nSitemap: ${FEndUrl}sitemap-index.xml\n`
    response.send(xml);
});

app.get('/news-sitemap.xml', async function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    let sql = `SELECT en_contents.ContentID, en_contents.ContentHeading, en_contents.created_at, en_contents.updated_at, en_bas_categories.Slug FROM en_contents INNER JOIN en_bas_categories ON en_contents.CategoryIDs=en_bas_categories.CategoryID WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 ORDER BY en_contents.ContentID DESC LIMIT 500`;
    try {
        const queryData = await enConfig.query( sql );
        if (queryData && queryData.length > 0) {
            let xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;
            for (let i = 0; i < queryData.length; i++) {
                let date = queryData[i].updated_at ? queryData[i].updated_at : queryData[i].created_at;
                xml += `<url>
                    <loc>${FEndUrl}/${queryData[i].Slug}/news/${queryData[i].ContentID}</loc>
                    <news:news>
                        <news:publication><news:name>The News 24</news:name><news:language>en</news:language></news:publication>
                        <news:publication_date>${date}</news:publication_date>
                        <news:title>${(queryData[i].ContentHeading).replace("&", "&amp;")}</news:title>
                    </news:news>
                </url>`
                if (i == queryData.length - 1) response.send(xml + `</urlset>`);
            }
        } else {
            response.send(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`);
        }
    }catch (err) {
        response.send(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`);
    }
});

app.get('/english/rss/rss.xml', async function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    let sql = `SELECT en_contents.ContentID, en_contents.ContentHeading, en_contents.ContentBrief, en_contents.ImageBgPath, en_contents.created_at, en_contents.updated_at, en_bas_categories.Slug FROM en_contents INNER JOIN en_bas_categories ON en_contents.CategoryIDs=en_bas_categories.CategoryID WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 ORDER BY en_contents.ContentID DESC LIMIT 120`;
    try {
        const queryData = await enConfig.query( sql );
        if (queryData && queryData.length > 0) {
            let xml = `<rss version="2.0"><channel><title>The News 24</title><link>${FEndUrl}</link>`;
            for (let i = 0; i < queryData.length; i++) {
                xml += `<item>
                    <title><![CDATA[ ${queryData[i].ContentHeading} ]]></title>
                    <description><![CDATA[ ${queryData[i].ContentBrief} ]]></description>
                    <link>${FEndUrl}/${queryData[i].Slug}/news/${queryData[i].ContentID}</link>
                </item>`
                if (i === queryData.length - 1) response.send(xml + `</channel></rss>`);
            }
        } else {
            response.send(`<rss><channel></channel></rss>`);
        }
    }catch (err) {
        response.send(`<rss><channel></channel></rss>`);
    }
});

app.get('/english/:catSlugEn', async function (request, response) {
    let catSlug = request.params.catSlugEn;
    const filePath = path.resolve(__dirname, './build', 'index.html');
    let sql = `SELECT CategoryID, CategoryName FROM en_bas_categories WHERE Slug=?`;
    try {
        const queryData = await enConfig.query( sql, [catSlug] ); // Changed to enConfig to pull correctly for English Category paths
        if (queryData && queryData.length > 0) {
            let title = queryData[0].CategoryName;
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) return response.status(500).send("File read error");
                data = data.replace(/\$OG_TITLE/g, `${title} | The News 24`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                data = data.replace(/\$OG_TITLE/g, `404 - Not Found`);
                response.send(data);
            });
        }
    } catch (err) {
        response.status(500).send("Server Error Context");
    }
});

// Start server fallback connection
httpServer.listen(FEndPort, function() {
    console.log(`Server handling content configurations on port ${FEndPort}`);
});