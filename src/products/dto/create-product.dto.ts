/**
    res.data.data
    {
        "id": 1,
        "name": "cerulean",
        "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
    }

 */

export class CreateProductDto {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string
}
