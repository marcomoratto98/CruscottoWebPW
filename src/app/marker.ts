export class Marker {

    public lat:Number;
    public lon:Number;
    public nPersone:Number;
    public porte:boolean;
    public linea:Number;
    public nAutobus:Number;

    /*lat: Influx.FieldType.FLOAT,
        lon: Influx.FieldType.FLOAT,
        npersone: Influx.FieldType.INTEGER,
        porte: Influx.FieldType.BOOLEAN 
      },
      tags: ['linea', 'nautobus'*/

}

export class Data{
    public list: Marker[];
}
