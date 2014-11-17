LOAD({
	"name": "bug",
	"above": [
		{
			"name": "bg",
			"image": "image/bg.png",
			"pivot": {
				"x": 256,
				"y": 256
			},
			"rotate": 0,
			"scale": 1,
			"alpha": 1,
			"offset": {
				"x": 0,
				"y": 0
			},
			"above": [
				{
					"name": "body",
					"image": "image/body.png",
					"pivot": {
						"x": 255,
						"y": 200
					},
					"rotate": 0,
					"scale": 1,
					"alpha": 1,
					"offset": {
						"x": 238,
						"y": 192
					},
					"above": [
						{
							"name": "blood",
							"image": "image/blood.png",
							"pivot": {
								"x": 17,
								"y": 3
							},
							"rotate": 0,
							"scale": 1,
							"alpha": 1,
							"offset": {
								"x": 4,
								"y": 314
							},
							"above": [],
							"below": []
						}
					],
					"below": [
						{
							"name": "wing1",
							"image": "image/wing1.png",
							"pivot": {
								"x": 8,
								"y": 172
							},
							"rotate": 0,
							"scale": 1,
							"alpha": 1,
							"offset": {
								"x": 320,
								"y": 132
							},
							"above": [],
							"below": []
						},
						{
							"name": "wing2",
							"image": "image/wing2.png",
							"pivot": {
								"x": 117,
								"y": 260
							},
							"rotate": 0,
							"scale": 1,
							"alpha": 1,
							"offset": {
								"x": 322,
								"y": 134
							},
							"above": [],
							"below": []
						}
					]
				}
			],
			"below": []
		}
	],
	"below": []
});