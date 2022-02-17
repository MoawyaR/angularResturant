"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconnect_1 = __importDefault(require("./dbconnect"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = 3000;
let app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send("this is index page");
});
app.listen(port, () => {
    console.log("server is  port : " + port);
});
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/menu', (req, res) => {
    dbconnect_1.default.query('SELECT * FROM menu', (err, reslut) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(reslut);
        }
    });
});
app.get('/menu/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.default.query('SELECT * FROM menu WHERE id=?', id, (err, reslut) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(reslut);
        }
    });
});
app.post('/menu', (req, res) => {
    let menu = req.body.menu;
    dbconnect_1.default.query(`
    INSERT INTO  menu (title,description,price) VALUES
    ('${menu.title}','${menu.description}','${menu.price}');
    `, (err, reslut) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(reslut);
        }
    });
});
app.get('/restu', (req, res) => {
    dbconnect_1.default.query('SELECT * FROM restu', (err, reslut) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(reslut);
        }
    });
});
app.get('/restu/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.default.query('SELECT * FROM restu WHERE id=?', id, (err, reslut) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(reslut);
        }
    });
});
app.post('/restu', (req, res) => {
    let restu = req.body.restu;
    dbconnect_1.default.query(`
    INSERT INTO  restu (title,cuisines,lat,lng,rate,image) VALUES
    ('${restu.title}','${restu.cuisines}','${restu.lat}','${restu.lng}','${restu.rate}','${restu.image}');
    `, (err, reslut) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(reslut);
        }
    });
});
//# sourceMappingURL=index.js.map