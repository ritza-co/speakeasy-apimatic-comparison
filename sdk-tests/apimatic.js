"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bookstore_apilib_1 = require("bookstore-apilib");
var clientConfig = {
// apiKeyCredentials: {
//   "X-API-Key": "YOUR_API_KEY",
// },
// httpClientOptions: {
//   httpAgent: 'Testing',
//   httpsAgent: 'Testing',
// }
};
console.log("Client configuration:", clientConfig);
var client = new bookstore_apilib_1.Client(clientConfig);
console.log("Created client:", client);
console.log("Client properties:", Object.keys(client));
var booksController = new bookstore_apilib_1.BooksController(client);
var bookId = 1;
function testGetBookById() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, result, httpResponse, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    console.log("Attempting to get book by ID:", bookId);
                    return [4 /*yield*/, booksController.getBookById(bookId)];
                case 1:
                    _a = _b.sent(), result = _a.result, httpResponse = __rest(_a, ["result"]);
                    console.log("API Response:", result);
                    console.log("HTTP Response:", httpResponse);
                    if (bookstore_apilib_1.GetBookByIdResponse.isProgrammingBook(result)) {
                        console.log("Book is a Programming Book");
                    }
                    else if (bookstore_apilib_1.GetBookByIdResponse.isFantasyBook(result)) {
                        console.log("Book is a Fantasy Book");
                    }
                    else if (bookstore_apilib_1.GetBookByIdResponse.isSciFiBook(result)) {
                        console.log("Book is a Sci-Fi Book");
                    }
                    else {
                        console.log("Unknown book type");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error("Error details:", error_1);
                    if (error_1 instanceof bookstore_apilib_1.ApiError) {
                        console.error("API Error:", error_1.result);
                        console.error("Status Code:", error_1.statusCode);
                        console.error("Headers:", error_1.headers);
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Wrap the entire execution in a try-catch block
try {
    testGetBookById();
}
catch (error) {
    console.error("Uncaught error:", error);
}
