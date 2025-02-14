


export const getSearchParamsAfterPriceFilter = (searchParams, minPrice, maxPrice) => {

    if(!minPrice && !maxPrice) {
        if(searchParams.has('min')) {
            searchParams.delete('min');
        }
        
        if(searchParams.has('max')) {
            searchParams.delete('max');
        }
    }
    
     // filtering based only on min price
     if(minPrice && !maxPrice) {
        if(!searchParams.has('min')) {
            searchParams.append('min', minPrice);
        }
        else {
            searchParams.set('min', minPrice);
        }

        if(searchParams.has('max')) {
            searchParams.delete('max');
        }
    }

    // filtering based only on max price
    if(maxPrice && !minPrice) {
        if(!searchParams.has('max')) {
            searchParams.append('max', maxPrice);
        }
        else {
            searchParams.set('max', maxPrice);
        }

        if(searchParams.has('min')) {
            searchParams.delete('min');
        }
    }

    // filtering based on min price and max price
    if(minPrice && maxPrice) {
        if(!searchParams.has('min')) {
            searchParams.append('min', minPrice);
        }
        else {
            searchParams.set('min', minPrice);
        }

        if(!searchParams.has('max')) {
            searchParams.append('max', maxPrice);
        }
        else {
            searchParams.set('max', maxPrice);
        }
    }

    // finally set page = 1
    searchParams.set('page', 1);

    alert(searchParams);

    return searchParams;
}



