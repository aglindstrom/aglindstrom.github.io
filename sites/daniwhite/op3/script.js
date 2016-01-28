function init(){
    var dopeVector = [0,1,2,3,4,5,6,7,8,9,10,11,13,12,14,15];
    var columns = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,1];
    var title = ["322", "323", "An Apology", "Aura", "Bitte", "Cross You Mind", "Empty Words and Broken Vessles", "Feet", "Forces", "Forgiveness", "Home", "Honesty", "Joy", "Letting Go", "Our Adventure", "The Fates"];
    var media = ["Watercolor", "Watercolor", "Graphite", "Watercolor", "Charcoal", "Watercolor", "Charcoal", "Graphite", "Ink", "Watercolor", "Watercolor", "Charcoal", "Watercolor", "Charcoal", "Watercolor", "Graphite"];
    var dimensions = ["?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?", "?x?"];
    var current = 0;
    var totalImgs = 16;
    for (var i = 0; i < totalImgs; i++)
    {
        current = dopeVector[i];

        addImage(current, title[current], media[current], dimensions[current], columns[i]);
    }
    var div = document.createElement("div");
    div.style.height = "10em";
    document.getElementById("column1").appendChild(div);
}

function addImage(source, title, media, dimensions, col)
{
    var master = document.getElementById("content");
    var parent = document.getElementById(String("column" + (col+1)));
    var div = document.createElement("div");
    var img = document.createElement("img");

    img.src = String("./images/img_" + (source+1) + ".jpg");
    img.dataset.title = title;
    img.dataset.media = media;
    img.dataset.dimensions = dimensions;
    img.addEventListener( "mousedown", function(){dispMsg(img);}, false);

    div.className = "imgwrap";
    div.appendChild(img);
    parent.appendChild(div);
}

function dispMsg(source)
{
    var parent = document.getElementById("column4");
    var children = parent.childNodes[1].childNodes;
    children[1].innerHTML = source.dataset.title;
    children[3].innerHTML = String( "Media: " + source.dataset.media);
    children[5].innerHTML = String( "Dimensions: " + source.dataset.dimensions);
}

function checkSmallest(array)
{
    var smallest = 0;
    for(var i = 0; i < array.length; i++)
    {
        for( var j = 0; j < array.length; j++)
        {
            if(array[j] > array[i])
            {
                smallest = i;
            }
        }
    }
    console.log(array);
    console.log(smallest);
    return smallest;
}