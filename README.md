[properties-listing.postman_collection.json](https://github.com/user-attachments/files/20813492/properties-listing.postman_collection.json)# property-Listing
my task which contain both frontend and beackend


database tables

create table users (
	id SERIAL Primary key,
	username VARCHAR(100) not null UNIQUE,
	email VARCHAR(100) not null unique,
	password TEXT not null,
	created_at TIMESTAMP default CURRENT_TIMESTAMP
);


create table properties (
	id SERIAL Primary key,
	user_id Integer REFERENCES users(id) on delete cascade,
	title VARCHAR(200),
	description TEXT,
	price NUMERIC,
	image varchar(255),
	created_at TIMESTAMP default CURRENT_TIMESTAMP
);
[Uploading properties-listing.postman_col{
	"info": {
		"_postman_id": "f2898dc4-f4a0-472d-b2af-e161ac0440e4",
		"name": "properties-listing",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "45328853",
		"_collection_link": "https://priyansh-7514469.postman.co/workspace/Priyansh's-Workspace~55464f42-53e4-4a2d-863a-cd5cb059274c/collection/45328853-f2898dc4-f4a0-472d-b2af-e161ac0440e4?action=share&source=collection_link&creator=45328853"
	},
	"item": [
		{
			"name": "auth api",
			"item": [
				{
					"name": "register api",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "// {\r\n//   \"username\": \"john123\",\r\n//   \"email\": \"john@example.com\",\r\n//   \"password\": \"secret123\"\r\n// }\r\n\r\n{\r\n  \"username\": \"priyansh\",\r\n  \"email\": \"priyansh@example.com\",\r\n  \"password\": \"priyansh\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/api/auth/register",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"auth",
								"register"
							]
						}
					},
					"response": []
				},
				{
					"name": "login api",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"email\": \"priyansh@example.com\",\r\n  \"password\": \"priyansh\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/api/auth/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"auth",
								"login"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Properties folder",
			"item": [
				{
					"name": "create Properties",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJwcml5YW5zaEBleGFtcGxlLmNvbSIsImlhdCI6MTc1MDMxMDQ2OCwiZXhwIjoxNzUwMzE0MDY4fQ.6u8VKQjXwftJjU-S3nk0HeAYLtBRT1xGBW071xcMV4Q",
								"type": "text"
							}
						],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "title",
									"value": "sample property",
									"type": "text"
								},
								{
									"key": "description",
									"value": "nice house",
									"type": "text"
								},
								{
									"key": "price",
									"value": "120000",
									"type": "text"
								},
								{
									"key": "image",
									"type": "file",
									"src": "/C:/Users/mkjai/Downloads/img.jpg"
								}
							]
						},
						"url": {
							"raw": "http://localhost:5000/api/properties/createProperties",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"properties",
								"createProperties"
							]
						}
					},
					"response": []
				},
				{
					"name": "get Properties",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJwcml5YW5zaEBleGFtcGxlLmNvbSIsImlhdCI6MTc1MDMxMDQ2OCwiZXhwIjoxNzUwMzE0MDY4fQ.6u8VKQjXwftJjU-S3nk0HeAYLtBRT1xGBW071xcMV4Q",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:5000/api/properties/getProperties",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"properties",
								"getProperties"
							]
						}
					},
					"response": []
				},
				{
					"name": "update Properties by id",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJwcml5YW5zaEBleGFtcGxlLmNvbSIsImlhdCI6MTc1MDMxMDQ2OCwiZXhwIjoxNzUwMzE0MDY4fQ.6u8VKQjXwftJjU-S3nk0HeAYLtBRT1xGBW071xcMV4Q"
							}
						],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "title",
									"value": "updated property title",
									"type": "text"
								},
								{
									"key": "description",
									"value": "nice house",
									"type": "text"
								},
								{
									"key": "price",
									"value": "120000",
									"type": "text"
								},
								{
									"key": "image",
									"type": "file",
									"src": []
								}
							]
						},
						"url": {
							"raw": "http://localhost:5000/api/properties/updateProperties/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"properties",
								"updateProperties",
								"1"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}lection.json…]()


postman curls 
