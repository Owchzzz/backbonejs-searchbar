# BackboneJS Search bar function
The backboneJS searchbar easily implementable. Searches collections and models inside of collections

## Basic Usage
The BackboneJS search bar is shipped as a view initially, but you specify options on the fly:



###Sample
    var items = [
            {   name:'test',
                value:'test'
            },
            {
                name:'test2',
                value:'test2'
            }
        ]
        var sb = new Searchbar({
            searchAttr: 'value',
            items:items
        });
        
    // To append to a document on ready    
    $(document).ready(function(){
        $('body').append(sb.render());
        $('#testbtn').on('click',function(){
            console.log(sb.getResults());
        });
        sb.onInput(function(e) {
            console.log('inside of callback');
            console.log(e.resultSet);
        })
    });