var geocoder = platform.getSearchService();
//Search Road
function geocoderSearch(){
    
    let geocodeParam = {
        //search
        q:'254 nguyen van linh danang'
    }
    //print result
    function onResult(result){
            //Show location on map
            console.log(result);
            var result1=result.map
            map.addObject(new H.map.Marker(result.items[0].access[0]));
            map.addObject(new H.map.Marker(result.items[0].position));
            
    }

    geocoder.geocode(geocodeParam,onResult,alert);

}

export default geocoderSearch;