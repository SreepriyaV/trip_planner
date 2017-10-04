
fetch('/api/')
.then(res=> res.json())
.then(data=> {
    var activity= data.activity;
    var hotel=data.hotel;
    var restaurant= data.restaurant;

    //console.log(data);
//    console.log( data);
//   var arr= Object.keys(data);
//   console.log(data[arr[0]]);

//     for(var i=0;i<arr.length;i++)
//         {
//             for(var j=0;j<data[arr[i]].length;j++)
//                 {
//                  var newoption = document.createElement("option");
//         newoption.append(data[arr[i]][j].name);
//         console.log(data[i][j]);
//         document.getElementById(data[i] + "-choices").append(newoption);
//                 }
//         }



  // console.log(hotel[0].name);

for(var i=0;i<hotel.length;i++)
    {
        console.log(hotel[i].name);

        var newoption = document.createElement("option");
        newoption.append(hotel[i].name);
        document.getElementById("hotels-choices").append(newoption);
    }

    for(var i=0;i<restaurant.length;i++)
        {
            var newoption = document.createElement("option");
        newoption.append(restaurant[i].name);
        document.getElementById("restaurants-choices").append(newoption);

        }

        for(var i=0;i<activity.length;i++)
        {
            var newoption = document.createElement("option");
        newoption.append(activity[i].name);
        document.getElementById("activities-choices").append(newoption);

        }

})
.catch(console.error);


//document.getElementById('hotel-add').onclick(function)