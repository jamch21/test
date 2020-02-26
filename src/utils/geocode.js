const request=require('request')

const geoCode=(address, callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiamFtY2gyMSIsImEiOiJjazI2YzZ2NHowNDRsM2NvNmZpcTMxMmE5In0.OUxqVYvOnIasIHr8LNRPPA'
    request({url:url,json:true},(error,response)=>{
        if (error){
            callback('Unable to connect to location services')
        }else if (response.body.features.length===0){
            callback('No features')
        }else{
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports=geoCode