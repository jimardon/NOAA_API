'use strict';

//variables start
var base_request_URL = '';
var new_request_URL = '';
var main_page_name = '';
var api_type = '';
var main_description = '';
var server = '';
var saved_urls = [];
var all_stations = [];
var faq_text = '';
var general_help_text = '';

var expand_array = [];
var resource_array = [];
var type_name = [];
var type_value = [];
var resource_name = [];
var resource_value = [];
var expand_name = [];
var expand_value = [];

var subordinate_tidepred_station_array= [];

var expand_name_origin = ['Details','Sensors','Products','Disclaimers','Notices','Datums','Superseded Datums','Harmonic Constituents','Tide Prediction Offsets','Benchmarks','Nearby','Bins','Deployments','Currents Prediction Offsets','Flood Levels'];
var expand_value_origin = ['details','sensors','products','disclaimers','notices','datums','supersededdatums','harcon','tidepredoffsets','benchmarks','nearby','bins','deployments','currentpredictionoffsets','floodlevels'];
var expand_waterlevels_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_waterlevels_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_historicwl_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_historicwl_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_met_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_met_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_waterlevelsandmet_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_waterlevelsandmet_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_tidepredictions_name = ['Tide Predition Offsets'];
var expand_tidepredictions_value = ['tidepredoffsets'];

var expand_harcon_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_harcon_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_datums_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_datums_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_supersededdatums_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_supersededdatums_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_benchmarks_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_benchmarks_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_supersededbenchmarks_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_supersededbenchmarks_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_currents_name = ['Deployments', 'Bins'];
var expand_currents_value = ['deployments', 'bins'];

var expand_historiccurrents_name = ['Deployments', 'Bins'];
var expand_historiccurrents_value = ['deployments', 'bins'];

var expand_surveycurrents_name = ['Deployments', 'Bins'];
var expand_surveycurrents_value = ['deployments', 'bins'];

var expand_currentpredictions_name = ['Deployments','Bins','Current Predition Offsets'];
var expand_currentpredictions_value = ['deployments','bins','currentpredictionoffsets'];

var expand_cond_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_cond_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_watertemp_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_watertemp_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_physocean_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_physocean_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_tcoon_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_tcoon_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var expand_1minute_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_1minute_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];
var expand_airgap_name = ['Details','Sensors','Flood Levels','Datums','Harmonic Constituents','Tide Prediction Offsets','Products','Disclaimers','Notices'];
var expand_airgap_value = ['details','sensors','floodlevels','datums','harcon','tidepredoffsets','products','disclaimers','notices'];

var base_url = window.location.href;
var base_url_api = "https://api.tidesandcurrents.noaa.gov/";
var base_url_origin =  window.location.origin; 
var base_url_dataapi_customized;   //customized based on dev, uat, or prod
var base_url_mdapi_customized;  //customized based on dev, uat, or prod
var base_url_dpapi_customized;

//variables that relate to input and get place in URL
//Data API
var d_base_request_URL_prod =
  'https://tidesandcurrents.noaa.gov/api/datagetter?';
var d_station_id = '';
var d_extension = 'xml';
var d_units = 'english';

var d_edate = '';
var d_bdate = '';
var d_date = '';
var d_range = '';
var d_other = '';

var d_bin = '';
var d_interval = '';
var d_application = '';

var d_product_name_array = [];
var d_product_value_array = [];
var d_product = 'water_level';

var d_datum_name_array = [];
var d_datum_value_array = [];
var d_datum = '';

var d_timezone = 'gmt';
var d_stationtype = 'waterlevel'; // "survey_current" or "current"

//Metadata API Latest
var md_base_request_URL_prod =
  'https://tidesandcurrents.noaa.gov/mdapi/latest/webapi/stations';

var md_station_id = ''; //example: 1611400... etc
var md_extension = 'xml'; //example: json     or     xml  (without .)     defaults to XML on startup
var md_resource = ''; //example: datums, details, disclaimers, floodlevels, etc
var md_type = 'waterlevels'; //example: waterlevels, historicwl, harcon, datums, 1minute, etc
var md_units = 'english'; //example: english (feet)   or   metric (meters)

//Derived Product API variables
var dp_base_request_URL_prod =
  'https://tidesandcurrents.noaa.gov/dpapi/latest/webapi/product';

var dp_product = '';
var dp_extension = '';
var dp_stationID = '';
var dp_affiliation = '';
var dp_year = '';
var dp_units = '';

window.onload = init;

//runs when window loads and sets up functionality
function init() {
  //adds features to some elements

  $('.autocomplete-input').keyup(autocompleteEnterButton); //runs autocompleteEnterButton for each key press to check if 'enter' is hit
  $('.autocomplete-input').bind('input propertychange', function() {
    autoComplete('d_stationselect', 'd_stationselect_matches');
  });

  $('#url-box').bind('input propertychange', function() {
    validateURL();
  });

  //hide loading image (only shows when ajax is processing)
  $('#loading-image-valid-url').hide();
  $('#loading-image-m_stations').hide();
  
  //set up which server we are on, dev, uat, or production, and set the correct API to go along 
  switch( base_url_origin)
  {
      case "https://dev.tidesandcurrents.noaa.gov": 
        base_url_dataapi_customized = base_url_api + "api/dev/"; 
        base_url_mdapi_customized = base_url_api + "mdapi/dev/"; 
        base_url_dpapi_customized = base_url_api + "dpapi/dev/";
        break;
        
      case "https://uat.tidesandcurrents.noaa.gov":
        base_url_dataapi_customized = base_url_api + "api/uat/"; 
        base_url_mdapi_customized = base_url_api + "mdapi/uat/"; 
        base_url_dpapi_customized = base_url_api + "dpapi/uat/";
        break;
        
      case "https://tidesandcurrents.noaa.gov": 
        base_url_dataapi_customized = base_url_api + "api/prod/"; 
        base_url_mdapi_customized = base_url_api + "mdapi/prod/"; 
        base_url_dpapi_customized = base_url_api + "dpapi/prod/";
        break;
        
      default: 
        base_url_dataapi_customized = base_url_api + "api/prod/"; 
        base_url_mdapi_customized = base_url_api + "mdapi/prod/"; 
        base_url_dpapi_customized = base_url_api + "dpapi/prod/";
        break;
  }
}

//resets the main page based on which API the user wants to use
function setupPage(apitype) {
    //show Loading Screen for 2 seconds
    $('#loading-screen').show();
    setTimeout(function() {
      $('#loading-screen').hide();
    }, 1800);
  
    //make sure all things are hidden so when an API is select only specific things show depending on the api_type
    document.querySelector('#typeselect-section').hidden = true;
    document.querySelector('#stationselect-section').hidden = true;
    document.querySelector('#resourceselect-section').hidden = true;
    document.querySelector('#extensionselect-section').hidden = true;
    document.querySelector('#unitselect-section').hidden = true;
    document.querySelector('#expandselect-section').hidden = true;
    document.querySelector('#productselect-section').hidden = true;
    document.querySelector('#datumselect-section').hidden = true;
    document.querySelector('#timezoneselect-section').hidden = true;
    document.querySelector('#dateselect-section').hidden = true;
    document.querySelector('#d_stationselect-section').hidden = true;
    document.querySelector('#dp_stationselect-section').hidden = true;
    document.querySelector('#rangeselect-section').hidden = true;
    document.querySelector('#intervalselect-section').hidden = true;
    document.querySelector('#binselect-section').hidden = true;
    document.querySelector('#yearselect-section').hidden = true;
    document.querySelector('#affiliationselect-section').hidden = true;
    document.querySelector('#dp_productselect-section').hidden = true;
    document.querySelector('#applicationselect-section').hidden = true;
    document.querySelector('#stations-product-commentary').hidden = true;
    document.querySelector('#bdateselect-section').hidden = true;
    document.querySelector('#edateselect-section').hidden = true;
    document.querySelector('#main-application').hidden = false;
    document.querySelector('#datum-disclaimer').hidden = false;
  
    //resetting variables used across APIs
    all_stations = [];
  
    //get a list of many stations calling different station types from the metadata API
    if (apitype == 'data') {
      //for data type only
      var get_url = '';
      var all_the_stations_possible = [];
      var types = ['waterlevels', 'historicwl', 'currents', 'tidepredictions']; // only able to do these ones since all 20 stations types returns over 20,000 stations...
  
      //making a large list of all station types from the types array using ajax
      for (var i1 = 0, j1 = types.length; i1 < j1; i1++) {
        get_url = '/mdapi/latest/webapi/stations.json?type=' + types[i1];
        alert(get_url)
        var station_array = '';
  
        $.ajax({
          dataType: 'json',
          url: get_url,
          data: null,
          async: false,
          success: function(jsondata) {
            station_array = jsondata.stations;
            all_stations = all_stations.concat(station_array);
          }
        });
      }
  
      var unique = [];
    } else if (apitype == 'derived_product') {
      //get stations for the current product type for DPAPI
      getData(
        '/dpapi/latest/webapi/product.json?name=toptenwaterlevels&units=english',
        'dpapi'
      ); //defaults to Top Ten Water Levels since that is the starting option
    } //get a list of active stations
    else {
      getData('/mdapi/latest/webapi/stations.json', 'autocomplete');
    }
  
    apiSelect(apitype);
  
    //putting together the main page
    document.getElementById('api-selection-screen').style.display = 'none';
    document.getElementById('main-title').innerHTML = main_page_name;
    document.getElementById('main-description').innerHTML = main_description;
  }
//merge two arrays
function mergeArrays(array1, array2) {
  var final_array = [];
  var arr = array1.concat(array2);
  var leng = arr.length;
  var assoc = {};

  while (leng--) {
    var item = arr[leng];
    if (!assoc[item]) {
      final_array.unshift(item);
      assoc[item] = true;
    }
  }

  return final_array;
}

//retrieves data from the Metadata API of stations
function getData(url, type) {

  console.log("Attempting to get data from:" + url);

  if (type != 'find_error') {
    //show loading image
    $('#loading-image-m_stations').show();

    //perform the request
    $.ajax({
      dataType: 'json',
      url: url,
      data: null,
      success: function(response) {
        populateList(response, type);
      },
      error: function() {
        populateList('', 'fail');
      },
      complete: function() {
        $('#loading-image-m_stations').hide();
      }
    });
  } else if (type == 'find_error') {
    //show loading image for valid URL
    $('#loading-image-valid-url').show();

    //perform the request
    $.ajax({
      dataType: 'json',
      url: url,
      data: null,
      success: function(response) {
        populateList(response, 'no_error');
      },
      error: function(response2) {
        populateList(response2, 'found_error');
      },
      complete: function() {
        $('#loading-image-valid-url').hide();
      }
    });
  }
}

//populate different lists with returned data from ajax
function populateList(returned_data, type) {
  
  //populates the datums list with datums from the stations api
  if (type == 'd_datums') {
    var list = returned_data.datums;

    //clear the list of datums
    document.getElementById('datumselect').innerHTML = '';
    document.getElementById('datum-commentary').innerHTML = '';

    //adding the datums to the datums selection section
    if (list != null) {
      for (var i = 0; i < list.length; i++) {
        //filter the datums
        if (
          list[i].name != 'GT' &&
          list[i].name != 'MN' &&
          list[i].name != 'DHQ' &&
          list[i].name != 'DLQ' &&
          list[i].name != 'HWI' &&
          list[i].name != 'LWI'
        ) {
          //do not add these certain datums
          var new_datum = document.createElement('option');
          if (list[i].name == 'NAVD88') {
            //change navd88 to navd     since 'navd88' is invalid paramenter
            new_datum.value = 'NAVD';
            new_datum.text = 'NAVD';
            //d_datum = 'NAVD';
          } 
          else if (list[i].name == 'GL_LWD') //change GL-LWD to just LWD (TAC-2674)
          {
            new_datum.value = 'LWD';
            new_datum.text = 'LWD';
            //d_datum = 'LWD';
          }
          else {
            new_datum.value = list[i].name;
            new_datum.text = list[i].name;
            //d_datum = list[0].name;
          }
          document.getElementById('datumselect').add(new_datum);
          d_datum = $('#datumselect').val();
        }
      }

      //hide the disclaimer message now that there are datums in the dropdown
      document.querySelector('#datum-disclaimer').hidden = true;

      //add first datum to d_datum so its the first thing that shows
      updateURL();

    } else {
      document.getElementById('datum-commentary').innerHTML =
        '*This station has no datums.';
      d_datum = '';
      updateURL();
    }
  } else if (type == 'dpapi') {
    //all_stations populated with stations from the current dpapi product type
    switch (dp_product) {
      case 'toptenwaterlevels':
        all_stations = returned_data.topTenWaterLevels;
        break;
      case 'annualflooddays':
        all_stations = returned_data.annualFloodDays;
        break;
      case 'extremewaterlevels':
        all_stations = returned_data.ExtremeWaterLevels;
        break;
      case 'sealvltrends':
        all_stations = returned_data.SeaLvlTrends;
        break;
    }
  } else if (type == 'md_stations') {
    all_stations = returned_data.stations;
    document.getElementById('md_stationselect').value = '';
    document.getElementById('md_stationselect_matches').innerHTML = '';
  } else if (type == 'autocomplete') {
    all_stations = returned_data.stations;
  } else if (type == 'd_station_name' && returned_data.count == 1) {
    var name = returned_data.stations[0].name;
    d_station_id = returned_data.stations[0].id;
    document.querySelector('#station-name-text').innerHTML = name;
    document.querySelector('#stations-product-commentary').hidden = false;
    document.querySelector('#stations-product-commentary').innerHTML =
      "<a id='data-inventory-text' onclick='getDataInventoryLink();'>" +
      "Click for Station's Data Inventory" +
      '</a>';
    $('#stations-product-commentary').attr('target', '_blank');
    document.querySelector('#wloption').selected = true;
    d_product = 'water_level';
  } else if (type == 'd_current') {
    var name = returned_data.stations[0].name;
    d_station_id = returned_data.stations[0].id;
    document.querySelector('#station-name-text').innerHTML = name;
    document.querySelector('#stations-product-commentary').hidden = false;
    document.querySelector('#stations-product-commentary').innerHTML =
      "Only 'Currents' product available for this station";
    document.querySelector('#currentsoption').selected = true;
    d_product = 'currents';
    updateURL();
  } else if (type == 'found_error') {
    document.querySelector('#valid-url-text').innerHTML = 'Not a valid URL';
    document.querySelector('#valid-url-text').style.color = '#a03424';
  } else if (type == 'no_error') {
    //see if there is error message
    if (returned_data.error) {
      //json
      document.querySelector('#valid-url-text').innerHTML = 'Not a valid URL';
      if (returned_data.error.message != '') {
        document.querySelector('#valid-url-text').innerHTML +=
          '<br>' + '(' + returned_data.error.message + ' )';
      }
      document.querySelector('#valid-url-text').style.color = '#a03424';
    } else if (api_type == 'derived_product') {
      document.querySelector('#valid-url-text').innerHTML = 'Valid URL';
      document.querySelector('#valid-url-text').style.color = 'green';
      $('#loading-image-valid-url').hide();

      //each product has a different returned.data object
      switch (dp_product) {
        case 'annualflooddays':
          if (
            $.isEmptyObject(
              returned_data.annualFloodDays ||
                returned_data.annualFloodDays.length < 1
            )
          ) {
            document.querySelector('#valid-url-text').innerHTML =
              'URL might not have data';
          }
          break;
        case 'extremewaterlevels':
          if ($.isEmptyObject(returned_data.ExtremeWaterLevels)) {
            document.querySelector('#valid-url-text').innerHTML =
              'URL might not have data';
          }
          break;
        case 'sealvltrends':
          if ($.isEmptyObject(returned_data.SeaLvlTrends)) {
            document.querySelector('#valid-url-text').innerHTML =
              'URL might not have data';
          }
          break;
        case 'toptenwaterlevels':
          if ($.isEmptyObject(returned_data.topTenWaterLevels)) {
            document.querySelector('#valid-url-text').innerHTML =
              'URL might not have data';
          }
          break;
      }
    } else {
      document.querySelector('#valid-url-text').innerHTML = 'Valid URL';
      document.querySelector('#valid-url-text').style.color = 'green';
    }
  }
}


//controls event calls based on buttons and selections
function updateMDAPI() {
  //select a station
  document.querySelector('#md_stationselect').onchange = function(e) {
    md_station_id = e.target.value;

    if (md_station_id == '') {
      //if all stations is selected cancel some expand options
      //update the expand options
      updateExpandOptions();

      //disable resource and reset value
      document.querySelector('#resourceselect').disabled = true;
      md_resource = '';

      //enable type and reset value to current value
      document.querySelector('#typeselect').disabled = false;
      md_type = document.querySelector('#typeselect').value;

      //if a resource is specified, then enable 'expand options'
      if (md_resource != '') {
        document.querySelector('#expandselect-section').hidden = true;
      } else {
        document.querySelector('#expandselect-section').hidden = false;
      }
    } //a single station is selected
    else {
      //enable resource selection and reset value to current value
      document.querySelector('#resourceselect').disabled = false;
      md_resource = document.querySelector('#resourceselect').value;

      //if a resource is specified, then disable 'expand options'
      if (md_resource == '') {
        document.querySelector('#expandselect-section').hidden = false;
      } else {
        document.querySelector('#expandselect-section').hidden = true;
        clearExpandAndCheckboxes();
      }
    }

    updateURL();
  };

  //select a resource
  document.querySelector('#resourceselect').onchange = function(e) {
    md_resource = e.target.value;

    //if a resource is selected, disable Expand options
    if (md_resource != '') {
      document.querySelector('#expandselect-section').hidden = true;
      clearExpandAndCheckboxes();
    } else {
      document.querySelector('#expandselect-section').hidden = false;
    }

    updateURL();
  };

  //select a extension
  document.querySelector('#extensionselect').onchange = function(e) {
    md_extension = e.target.value;
    updateURL();
  };

  //select a type
  document.querySelector('#typeselect').onchange = function(e) {
    md_type = e.target.value;

    //update the expand options based on the Type selected
    expand_array = [];

    //hiding & clearing expand options Datums and Harmonic Constitutes because they do not expand for all stations, only single stations
    updateExpandOptions(); //first redraw and reset all expand options and checkboxes: already resets expand options variable too
    $('#expandselect .option-harcon').hide();
    $('#expandselect .option-datums').hide();

    //update the stations dropdown section based on which Type is selected
    var url = '/mdapi/latest/webapi/stations.json?type=' + md_type;
    getData(url, 'md_stations');
    md_station_id = ''; //set station id to nothing since the station dropdown is repopulated
    updateURL();
  };

  //select a unit
  document.querySelector('#unitsselect').onchange = function(e) {
    md_units = e.target.value;
    updateURL();
  };
}

//resets interval or shows and enables interval for Data API
function showHideInterval(command) {
  if (command == 'show') {
    //show interval section and reset interval value
    document.getElementById('intervalselect-section').hidden = false;
    //d_interval = document.getElementById('intervalselect').value;

  } //hide interval section and reset interval value
  else {
    document.getElementById('intervalselect-section').hidden = true;
    d_interval = '';
  }
}

//resets interval or shows and enables interval for Data API
function showHideInterval2(command)
{
  if (command == 'show')
  {
    //show interval section and reset interval value
    document.getElementById('intervalselect2-section').hidden = false;
    //d_interval = document.getElementById('intervalselect').value;

  } //hide interval section and reset interval value
  else
  {
    document.getElementById('intervalselect2-section').hidden = true;
    d_interval = '';
  }
}

//toggle if a option in a select type < > is hidden or not
function toggleHiddenFromSelectMenu(
  hide_option_value,
  select_element_id,
  command
) {
  var text =
    '#' + select_element_id + " option[value='" + hide_option_value + "']"; // "#elementid option [value='value1']""

  if (command == 'show') {
    $(text).show();
  } else {
    $(text).hide();
  }
}

//controls event calls for DataAPI
function updateDataAPI() {
  //select a product
  document.querySelector('#productselect').onchange = function(e) {
    d_product = e.target.value;
    d_bin = '';

    //display the data retrieval disclaimer message if the product is 6 min or 1 min water level
    if (d_product == 'water_level' || d_product == 'one_minute_water_level') {
      //show message
      $('#product-disclaimer').show();
    } //hide message
    else {
      $('#product-disclaimer').hide();
    }

    /*
            @desc - takes the children listed in the #met-group and #phys-group in the product dropdown of the Data API and 
            if the current selected product matches any of them, then show or hide interval
            *Only showing interval if the product is of certain type (met and phyiscal product type such as Air Temperature under the Met catagory of Product)
        */
    var met_and_phys_list = [];
    var met_list = $('#met-group').children(); //objects only -> must turn into strings and grab only the values
    var phys_list = $('#phys-group').children(); // ^
    for (
      var i = 0, j = met_list.length;
      i < j;
      i++ //adding in values (string) of the met products
    ) {
      met_and_phys_list.push(met_list[i].value);
    }
    for (
      var i = 0, j = phys_list.length;
      i < j;
      i++ //adding in values(string) of the physical products
    ) {
      met_and_phys_list.push(phys_list[i].value);
    }

    //checks to see if the current product is in the met&phy list
    var x = d_product;
    var test = $.inArray(x, met_and_phys_list); //returns -1 if it is false and any other number if true

    if (test != -1) {
      //is a met|phys product
      showHideInterval('show');
      $('#intervalselect').val(''); //sets the default option to be selected
      d_interval = document.querySelector('#intervalselect').value;
      toggleHiddenFromSelectMenu('h', 'intervalselect', 'show');
      toggleHiddenFromSelectMenu('hilo', 'intervalselect', 'hide');
    } // is not a met|phys product
    else {
      showHideInterval('hide');
      //$('#intervalselect').val(''); //sets the default option to be selected
      toggleHiddenFromSelectMenu('h', 'intervalselect', 'show');
      toggleHiddenFromSelectMenu('hilo', 'intervalselect', 'hide');
    }

    //checks to see if Tide Predictions is selected and if so only hilo is an option, so remove h option
    if (x == 'predictions') {
      showHideInterval('show');
      //$('#intervalselect').val(''); //sets the default option to be selected   $("#intervalselect option[value='']").attr('selected','selected'); works too
      d_interval = document.querySelector('#intervalselect').value;
      toggleHiddenFromSelectMenu('h', 'intervalselect', 'hide');
      toggleHiddenFromSelectMenu('hilo', 'intervalselect', 'show');
    }

    //checks to see if currents predictions is selected and 
    if (x == 'currents_predictions')
    {
      showHideInterval2('show');
      d_interval = document.querySelector('#intervalselect2').value;
    }

    //return a station with the product (due to MDAPI vs DAPI issues, this is what we have to do)
    //returnStationWithProduct(d_product);
    updateURL();
  };

  //if there is a range, then add it
  document.querySelector('#rangeselect-section').onchange = function(e) {
    d_range = document.querySelector('#rangeselect').value;
    updateURL();
  };

  //checking for bin input
  if (document.querySelector('#binselect-section').hidden == false) {
    d_bin = document.querySelector('#binselect').value;
    updateURL();
  }

  //updating data APIs station based on text input which should be a total of 7 digits
  if (document.querySelector('#d_stationselect-section').hidden == false) {
    var input_string_raw = document.querySelector('#d_stationselect').value;
    var input_string_raw = input_string_raw.trim(); //get rid of any white spaces in the text input
    var input_string_original = input_string_raw;
    var input_string = input_string_raw.split('');

    document.querySelector('#stations-product-commentary').hidden = true;

    for (var i = 0; i < input_string.length; i++) {
      input_string[i] = Number(input_string[i]);
    }

    if (
      input_string_original.length == 7 &&
      Number.isInteger(input_string[0]) &&
      Number.isInteger(input_string[1]) &&
      Number.isInteger(input_string[2]) &&
      Number.isInteger(input_string[3]) &&
      Number.isInteger(input_string[4]) &&
      Number.isInteger(input_string[5])
    ) {
      //regular station
      document.querySelector('#binselect-section').hidden = true;
      document.querySelector('#binselect').value = '';
      d_bin = '';

      d_station_id = document.querySelector('#d_stationselect').value;

      var get_data_url =
        '/mdapi/latest/webapi/stations/' +
        d_station_id +
        '/datums.json?units=' +
        d_units;
      getData(get_data_url, 'd_datums');

      var get_name_url =
        '/mdapi/latest/webapi/stations/' + d_station_id + '.json';
      getData(get_name_url, 'd_station_name');
      document.querySelector('#station-name-text').innerHTML = '';
    } else if (
      input_string_original.length == 7 &&
      !Number.isInteger(input_string[0]) &&
      !Number.isInteger(input_string[1]) &&
      !Number.isInteger(input_string[2]) &&
      Number.isInteger(input_string[3]) &&
      Number.isInteger(input_string[4]) &&
      Number.isInteger(input_string[5])
    ) {
      //survey current meters example:   BOS1101   doesn't check for caps
      d_station_id = document.querySelector('#d_stationselect').value;

      //show bin
      document.querySelector('#binselect-section').hidden = false;

      //hide datum and reset
      document.querySelector('#datumselect-section').hidden = true;
      d_datum = '';
      document.querySelector('#datumselect').value = '';

      document.querySelector('#station-name-text').innerHTML = '';
      document.querySelector('#stations-product-commentary').hidden = true;

      var get_name_url =
        '/mdapi/latest/webapi/stations/' + d_station_id + '.json';
      getData(get_name_url, 'd_current');

      //if meteorological data or predictions, then show interval
      //document.querySelector("#intervalselect-section").hidden = true;
    } else if (
      input_string_original.length == 6 &&
      !Number.isInteger(input_string[0]) &&
      !Number.isInteger(input_string[1]) &&
      Number.isInteger(input_string[2]) &&
      Number.isInteger(input_string[3]) &&
      Number.isInteger(input_string[4]) &&
      Number.isInteger(input_string[5])
    ) {
      //for real time current meter example: cb0102
      d_station_id = document.querySelector('#d_stationselect').value;

      //show bin
      document.querySelector('#binselect-section').hidden = false;

      //hide datum and reset
      document.querySelector('#datumselect-section').hidden = true;
      d_datum = '';
      document.querySelector('#datumselect').value = '';
      document.querySelector('#station-name-text').innerHTML = '';
      document.querySelector('#stations-product-commentary').hidden = true;

      var get_name_url =
        '/mdapi/latest/webapi/stations/' + d_station_id + '.json';
      getData(get_name_url, 'd_current');

      //if meteorological data or predictions, then show interval
      //document.querySelector("#intervalselect-section").hidden = true;
    } else if (
      input_string_original.length == 6 &&
      !Number.isInteger(input_string[0]) &&
      Number.isInteger(input_string[1]) &&
      Number.isInteger(input_string[2]) &&
      Number.isInteger(input_string[3]) &&
      Number.isInteger(input_string[4]) &&
      Number.isInteger(input_string[5])
    ) {
      //also real time current meter example: s09010
      d_station_id = document.querySelector('#d_stationselect').value;

      //show bin
      document.querySelector('#binselect-section').hidden = false;

      //hide datum and reset
      document.querySelector('#datumselect-section').hidden = true;
      d_datum = '';
      document.querySelector('#datumselect').value = '';
      document.querySelector('#station-name-text').innerHTML = '';
      document.querySelector('#stations-product-commentary').hidden = true;

      var get_name_url =
        '/mdapi/latest/webapi/stations/' + d_station_id + '.json';
      getData(get_name_url, 'd_current');

      //if meteorological data or predictions, then show interval
      //document.querySelector("#intervalselect-section").hidden = true;
    } else {
      document.querySelector('#station-name-text').innerHTML = '';
    }
  }

  //update application
  if (document.querySelector('#applicationselect-section').hidden == false) {
    d_application = document.querySelector('#applicationselect').value;
    updateURL();
  }

  //date range selection
  document.querySelector('#date-range-select').onchange = function(e) {
    document.querySelector('#bdateselect-section').hidden = true;
    document.querySelector('#edateselect-section').hidden = true;
    document.querySelector('#rangeselect-section').hidden = true;
    d_other = '';
    d_edate = '';
    d_bdate = '';

    var select = e.target.value;

    if (select == 'bdate-edate') {
      document.querySelector('#bdateselect-section').hidden = false;
      document.querySelector('#edateselect-section').hidden = false;
      d_edate = document.querySelector('#edate').value;
      d_bdate = document.querySelector('#bdate').value;
    } else if (select == 'bdate-range') {
      document.querySelector('#bdateselect-section').hidden = false;
      document.querySelector('#rangeselect-section').hidden = false;
      d_range = document.querySelector('#rangeselect').value;
      d_bdate = document.querySelector('#bdate').value;
    } else if (select == 'edate-range') {
      document.querySelector('#edateselect-section').hidden = false;
      document.querySelector('#rangeselect-section').hidden = false;
      d_range = document.querySelector('#rangeselect').value;
      d_edate = document.querySelector('#edate').value;
    } else {
      d_other = e.target.value;
    }
    updateURL();
  };

  //update bdate
  if (document.querySelector('#bdate').hidden == false) {
    d_bdate = document.querySelector('#bdate').value;
    updateURL();
  }

  //update edate
  if (document.querySelector('#edate').hidden == false) {
    d_edate = document.querySelector('#edate').value;
    updateURL();
  }

  //select an interval
  document.querySelector('#intervalselect').onchange = function(e) {
    d_interval = e.target.value;
    updateURL();
  };

  //select an interval2 (currents predictions)
  document.querySelector('#intervalselect2').onchange = function (e)
  {
    d_interval = e.target.value;
    updateURL();
  };

  //select a time zone
  document.querySelector('#timezoneselect').onchange = function(e) {
    d_timezone = e.target.value;
    updateURL();
  };

  //select a datum
  document.querySelector('#datumselect').onchange = function(e) {
    d_datum = e.target.value;
    updateURL();
  };

  //select a extension type
  document.querySelector('#extensionselect').onchange = function(e) {
    d_extension = e.target.value;
    updateURL();
  };

  //select a unit
  document.querySelector('#unitsselect').onchange = function(e) {
    d_units = e.target.value;
    updateURL();
  };
}

//controls event calls for DPAPI
function updateDPAPI() {
  document.querySelector('#extensionselect-section').onchange = function(e) {
    dp_extension = e.target.value;
    updateURL();
  };
  document.querySelector('#unitselect-section').onchange = function(e) {
    dp_units = e.target.value;
    updateURL();
  };
  document.querySelector('#dp_productselect-section').onchange = function(e) {
    dp_product = e.target.value;

    document.querySelector('#yearselect-section').hidden = true;
    document.querySelector('#unitselect-section').hidden = false;
    document.querySelector('#affiliationselect-section').hidden = true;

    //showing different fields depending on product
    if (dp_product == 'annualflooddays') {
      //for yearly inundatdion statistics
      document.querySelector('#yearselect-section').hidden = false;
      document.querySelector('#unitselect-section').hidden = true;
      getData(
        '/dpapi/latest/webapi/product.json?name=annualflooddays&units=english',
        'dpapi'
      );
    } else if (dp_product == 'sealvltrends') {
      //for sea level trends
      document.querySelector('#affiliationselect-section').hidden = false;
      document.querySelector('#unitselect-section').hidden = true;
      getData('/dpapi/latest/webapi/product/sealvltrends.json', 'dpapi');
    } else if (dp_product == 'toptenwaterlevels') {
      getData(
        '/dpapi/latest/webapi/product.json?name=toptenwaterlevels&units=english',
        'dpapi'
      );
    } else if (dp_product == 'extremewaterlevels') {
      getData(
        '/dpapi/latest/webapi/product.json?name=extremewaterlevels&units=english',
        'dpapi'
      );
    }

    updateURL();
  };
  document.querySelector('#affiliationselect-section').onchange = function(e) {
    dp_affiliation = e.target.value;
    updateURL();
  };
  if (document.querySelector('#yearselect-section').hidden == false) {
    var input_string_year = document.querySelector('#yearselect').value;
    input_string_year = Number(input_string_year);
    var currentyear = new Date().getFullYear();
    currentyear = Number(currentyear);

    document.getElementById('year-commentary-text').innerHTML = '';
    document.getElementById('year-commentary-text').style.color = '#af0a3b';

    if (1850 <= input_string_year && input_string_year <= currentyear) {
      dp_year = document.querySelector('#yearselect').value;
      document.getElementById('year-commentary-text').innerHTML = '';
      updateURL();
    } else {
      document.getElementById('year-commentary-text').innerHTML =
        'Out of Range';
    }

    //if there is no entry, then remove the "out of range" as well as the year value
    if (document.getElementById('yearselect').value == '') {
      document.getElementById('year-commentary-text').innerHTML = '';
      dp_year = '';
      updateURL();
    }
  }
}

//creates either the beginning date or the ending date
function generateDate(date) {
  if (date == 'bdate') {
    var newdate = '';
    newdate += document.querySelector('#bdateselect-year').value;
    newdate += document.querySelector('#bdateselect-month').value;
    newdate += document.querySelector('#bdateselect-day').value;
    d_bdate = newdate;
    updateURL();
  } else if (date == 'edate') {
    var newdate = '';
    newdate += document.querySelector('#edateselect-year').value;
    newdate += document.querySelector('#edateselect-month').value;
    newdate += document.querySelector('#edateselect-day').value;
    d_edate = newdate;
    updateURL();
  }
}

//clears the expand array and unchecks checkboxes
function clearExpandAndCheckboxes() {
  //clear the checkboxes array
  expand_array = [];
  resource_array = [];

  //grab all the input types
  var checkboxes = document.getElementsByTagName('input');
  for (var i = 0; i < checkboxes.length; i++) {
    //for the expand checkboxes
    if (
      checkboxes[i].type == 'checkbox' &&
      checkboxes[i].checked == true &&
      checkboxes[i].className == 'expand-class'
    ) {
      //uncheck the boxes
      checkboxes[i].checked = false;
    }
    //for the resource checkboxes
    else if (
      checkboxes[i].type == 'checkbox' &&
      checkboxes[i].checked == true &&
      checkboxes[i].className == 'resource-class'
    ) {
      //uncheck the boxes
      checkboxes[i].checked = false;
    } else {
    }
  }

  updateURL();
}

//adds expand checkboxes based on the station type
function updateExpandOptions() {
  switch (md_type) {
    case 'waterlevels':
      addCheckboxes(
        expand_waterlevels_name,
        expand_waterlevels_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'historicwl':
      addCheckboxes(
        expand_historicwl_name,
        expand_historicwl_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'met':
      addCheckboxes(
        expand_met_name,
        expand_met_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'waterlevelsandmet':
      addCheckboxes(
        expand_waterlevelsandmet_name,
        expand_waterlevelsandmet_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'tidepredictions':
      addCheckboxes(
        expand_tidepredictions_name,
        expand_tidepredictions_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'harcon':
      addCheckboxes(
        expand_harcon_name,
        expand_harcon_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'datums':
      addCheckboxes(
        expand_datums_name,
        expand_datums_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'supersededdatums':
      addCheckboxes(
        expand_supersededdatums_name,
        expand_supersededdatums_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'benchmarks':
      addCheckboxes(
        expand_benchmarks_name,
        expand_benchmarks_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'supersededbenchmarks':
      addCheckboxes(
        expand_supersededbenchmarks_name,
        expand_supersededbenchmarks_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'currents':
      addCheckboxes(
        expand_currents_name,
        expand_currents_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'historiccurrents':
      addCheckboxes(
        expand_historiccurrents_name,
        expand_historiccurrents_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'surveycurrents':
      addCheckboxes(
        expand_surveycurrents_name,
        expand_surveycurrents_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'currentpredictions':
      addCheckboxes(
        expand_currentpredictions_name,
        expand_currentpredictions_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'cond':
      addCheckboxes(
        expand_cond_name,
        expand_cond_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'watertemp':
      addCheckboxes(
        expand_watertemp_name,
        expand_watertemp_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'physocean':
      addCheckboxes(
        expand_physocean_name,
        expand_physocean_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'tcoon':
      addCheckboxes(
        expand_tcoon_name,
        expand_tcoon_value,
        'expand-class',
        'expandselect'
      );
      break;
    case '1minute':
      addCheckboxes(
        expand_1minute_name,
        expand_1minute_value,
        'expand-class',
        'expandselect'
      );
      break;
    case 'airgap':
      addCheckboxes(
        expand_airgap_name,
        expand_airgap_value,
        'expand-class',
        'expandselect'
      );
      break;
  }
}

//for the Data API, sets the station id to one that has the product
function returnStationWithProduct(product) {
  if (product == 'air_gap') {
    d_station_id = 'jx0501'; //dames point bridge
  } else if (product == 'visibility' || product == 'humidity') {
    d_station_id = '8447412'; //fall river visibility
  } else if (product == 'salinity') {
    d_station_id = '8770613'; //morgans point
  } else if (product == 'hourly_height') {
    d_station_id = '1612480'; //mokuoloe
  } else if (
    product == 'high_low' ||
    product == 'daily_mean' ||
    product == 'monthly_mean'
  ) {
    d_station_id = '8454000'; //providence
  } else if (product == 'one_minute_water_level' || product == 'predictions') {
    d_station_id = '9410840'; //santa monica
  } //the following station contains all other remaining products
  else {
    d_station_id = '8454049'; //quonest point
  }

  document.querySelector('#d_stationselect').value = d_station_id;
  updateDataAPI();
}

//shows a part of code based on id for date
function revealHideDate(id) {
  if (document.querySelector(id).hidden == true) {
    document.querySelector(id).hidden = false;
  } else {
    document.querySelector(id).hidden = true;
  }
}

//copys the text in the URL box to the clipboard
function copyURL() {
  var text_to_copy = document.querySelector('#url-box');
  text_to_copy.select();
  document.execCommand('copy');
}

//makes the link to the stations data inventory
function getDataInventoryLink() {
  var url =
    'https://tidesandcurrents.noaa.gov/inventory.html?id=' + d_station_id;
  window.open(url, '_blank');
}

//stores the current generated URL below the url generator box
function saveURL() {
  var newurl = document.querySelector('#url-box').value;

  //if there should be a cap on the amount saved
  if (saved_urls.length >= 20) {
    alert(
      'A maximum capacity of 20 URLs has been reached. Please clear the URL list.'
    );
  }

  //tried to save the same URL again (hit save URL twice)
  else if (saved_urls[saved_urls.length - 1] == newurl) {
    alert('This URL has already been saved.');
  }

  //add new URL to the array and display
  else {
    saved_urls.push(newurl);
    document.querySelector('#saved-urls').innerHTML = '';
    for (var i = 0; i < saved_urls.length; i++) {
      document.querySelector('#saved-urls').innerHTML +=
        "<a target='_blank' href=" +
        saved_urls[i] +
        '>' +
        saved_urls[i] +
        '<p></p>';
    }
  }
}

//resets the saved url array and empties the saved url section
function clearURL() {
  var r = confirm('Are you sure you want to clear the saved URLs?');
  if (r) {
    saved_urls = [];
    document.querySelector('#saved-urls').innerHTML = '';
  } else {
  }
}

//opens a new page to the URL
function submitURL() {
  var copied_url = document.querySelector('#url-box').value;
  window.open(copied_url);
}

//opens help section
function openHelp() {
  document.getElementById('help-menu').style.width = '100%';
}

//closes help section
function closeHelp() {
  document.getElementById('help-menu').style.width = '0%';
}

//starts tutorial
function startTutorial() {
  closeHelp();
  var tour;

  if (api_type == 'data') {
    // Initialize the tour
    tour = new Tour({
      name: 'tour1',
      container: 'body',
      keyboard: true,
      storage: false,
      debug: true,
      redirect: true,
      orphan: false,
      duration: false,
      delay: false,
      basePath: '',
      steps: [
        {
          element: '#d_stationselect-section',
          title: 'Station',
          content:
            'Type in a station ID. The station ID can be found on our Tides and currents website. Hover over the question mark for more information.'
        },
        {
          element: '#productselect-section',
          title: 'Product',
          content:
            'Select a product you want the data from. If a valid station is entered, the stations Data Inventory link should be available. Click on it to see which products are available, as a station has limited products and does not have every product on thte list. '
        },
        {
          element: '#dateselect-section',
          title: 'Date/Range',
          content:
            'Select one of the options for the date of data to be retrieved. Hover over the ? to see more information on some options and their time frame.'
        },
        {
          element: '#datumselect-section',
          title: 'Datum',
          content:
            'Select a datum if the station has any available. Hover over the ? for more information about datums.'
        },
        {
          element: '#timezoneselect-section',
          title: 'Time Zone',
          content: 'Select a Time Zone.'
        },
        {
          element: '#extensionselect-section',
          title: 'Extension',
          content:
            'Select an extention type for which the data will be formatted.'
        },
        {
          element: '#unitselect-section',
          title: 'Units',
          content: 'Select a unit for the data being returned.'
        },
        {
          element: '#applicationselect-section',
          title: 'Application',
          content:
            'This is optional. If you choose to do so, enter your affiliation so we know who is using our products.'
        },
        {
          element: '#intervalselect-section',
          title: 'Interval',
          content: 'Select a time interval for the data.'
        },
        {
          element: '#url-box',
          title: 'The Generated URL',
          content: 'This is the URL generated from the form you filled out.',
          placement: 'left'
        },
        {
          element: '#valid-url-section',
          title: 'URL Validator',
          placement: 'left',
          content:
            'This will tell you if the URL that is generated above is good or not and is updated every time the URL is. Click the text to see more about what makes a URL valid or invalid.'
        },
        {
          element: '#submit-url-button',
          title: 'Submit the URL',
          placement: 'left',
          content:
            'Click here to submit the URL and see the data generated from the form you filled out on the left.'
        }
      ]
    });
  }

  if (api_type == 'metadata') {
    // Initialize the tour
    tour = new Tour({
      name: 'tour2',
      container: 'body',
      keyboard: true,
      storage: false,
      debug: true,
      redirect: true,
      orphan: false,
      duration: false,
      delay: false,
      basePath: '',
      steps: [
        {
          element: '#typeselect-section',
          title: 'Station Type',
          content:
            'Select a station type, and the next dropdown menu will be populated with stations of that type. Hover over the ? to see more information.'
        },
        {
          element: '#stationselect-section',
          title: 'Station Selection',
          content:
            "Select a station you want the data for from the menu. If you don't see your station, make sure that the correct Station Type has been entered."
        },
        {
          element: '#resourceselect-section',
          title: 'Resource',
          content:
            'Select a single resource to for the returned data to expand on. If you would like multiple, leave this blank and continue to Expand Options.'
        },
        {
          element: '#extensionselect-section',
          title: 'Extension',
          content:
            'Select an extention type for which the data will be formatted.'
        },
        {
          element: '#unitselect-section',
          title: 'Units',
          content: 'Select a unit for the data being returned.'
        },
        {
          element: '#expandselect-section',
          title: 'Expand Options',
          content:
            'If there is no resource selected, check any of the expand options to get more details about them when the data is returned.'
        },
        {
          element: '#url-box',
          title: 'The Generated URL',
          placement: 'left',
          content: 'This is the URL generated from the form you filled out.'
        },
        {
          element: '#valid-url-section',
          title: 'URL Validator',
          placement: 'left',
          content:
            'This will tell you if the URL that is generated above is good or not and is updated every time the URL is. Click the text to see more about what makes a URL valid or invalid.'
        },
        {
          element: '#submit-url-button',
          title: 'Submit the URL',
          placement: 'left',
          content:
            'Click here to submit the URL and see the data generated from the form you filled out on the left.'
        }
      ]
    });
  }
  if (api_type == 'derived_product') {
    // Initialize the tour
    tour = new Tour({
      name: 'tour3',
      container: 'body',
      keyboard: true,
      storage: false,
      debug: true,
      redirect: true,
      orphan: false,
      duration: false,
      delay: false,
      basePath: '',
      steps: [
        {
          element: '#dp_stationselect-section',
          title: 'Station ID',
          content:
            'Enter in a Station ID, which is typically a 7 digit number. Hover over the ? to see more information and a list of Stations with their Station IDs.'
        },
        {
          element: '#dp_productselect-section',
          title: 'Product Selection',
          content:
            'Select a product. Hover over the ? to see information on the different product types. Some products might require additional information for you to fill outt.'
        },
        {
          element: '#extensionselect-section',
          title: 'Extension',
          content:
            'Select an extention type for which the data will be formatted.'
        },
        {
          element: '#unitselect-section',
          title: 'Units',
          content: 'Select a unit for the data being returned.'
        },
        {
          element: '#url-box',
          title: 'The Generated URL',
          placement: 'left',
          content: 'This is the URL generated from the form you filled out.'
        },
        {
          element: '#valid-url-section',
          title: 'URL Validator',
          placement: 'left',
          content:
            'This will tell you if the URL that is generated above is good or not and is updated every time the URL is. Click the text to see more about what makes a URL valid or invalid.'
        },
        {
          element: '#submit-url-button',
          title: 'Submit the URL',
          placement: 'left',
          content:
            'Click here to submit the URL and see the data generated from the form you filled out on the left.'
        }
      ]
    });
  }

  // Initialize the tour
  tour.init();
  tour.restart();
}

//shows FAQ on the help page
function showFAQ() {
  document.getElementById('help-menu-content-right').innerHTML = faq_text;
}

//shows general help
function showGeneralHelp() {
  document.getElementById(
    'help-menu-content-right'
  ).innerHTML = general_help_text;
}

//shows contact page
function showContact() {
  document.getElementById('help-menu-content-right').innerHTML =
    "Questions, concerns or feedback? Contact us at <a target='_top' href='mailto:co-ops.userservices@noaa.gov'> co-ops.userservices@noaa.gov</a>";
}

//autocomplete function
function autoComplete(form_element, match_list_element) {
  //grab a list of all stations
  var stationslist;
  var numbers = /^[0-9]+$/;
  var matches = [];
  document.getElementById(match_list_element).innerHTML = '';

  //conpensating for the odd call from DPAPI where station return names are different from metadata api
  if (api_type == 'derived_product') {
    //make new small station objects and add them to converted_stations array
    var converted_stations = [];

    for (var i = 0, j = all_stations.length; i < j; i++) {
      converted_stations.push({
        name: all_stations[i].stationName,
        id: all_stations[i].stationId
      });
    }
    stationslist = converted_stations;
  } else {
    stationslist = all_stations;
  }

  //search the database of all stations
  var entered_text = document.getElementById(form_element).value;
  entered_text = entered_text.toUpperCase(); //make everything upper case for the Includes() function since its case sensitive

  for (var i = 0; i < stationslist.length; i++) {
    if (
      entered_text != '' &&
      stationslist[i].name.toUpperCase().includes(entered_text)
    ) {
      //for Station Names
      matches.push(stationslist[i]);
    }
    if (entered_text != '' && stationslist[i].id.includes(entered_text)) {
      //for station IDs
      matches.push(stationslist[i]);
    }
    if (
      entered_text != '' &&
      stationslist[i].id.toUpperCase().includes(entered_text)
    ) {
      //for currents
      matches.push(stationslist[i]);
    }
  }

  //shaving down the matches list if there are too many
  var new_matches = [];
  for (var i = 0, j = matches.length; i < j; i++) {
    var beginning_letters = matches[i].name.substr(0, entered_text.length);
    beginning_letters = beginning_letters.toUpperCase();
    var beginning_numbers = matches[i].id.substr(0, entered_text.length);
    var beginning_letters2 = matches[i].id.substr(0, entered_text.length);
    beginning_letters2 = beginning_letters2.toUpperCase();

    if (beginning_letters == entered_text.toUpperCase()) {
      //for station names
      matches[i].station_type = 'name';
      new_matches.push(matches[i]);
    } else if (beginning_numbers == entered_text) {
      matches[i].station_type = 'id';
      new_matches.push(matches[i]);
    } else if (beginning_letters2 == entered_text) {
      matches[i].station_type = 'id';
      new_matches.push(matches[i]);
    }

    //derived product has multiple stations (6+) duplicates and limiting the stations comes later in code
    if (api_type != 'derived_product') {
      //anything but derived product
      //maximum is 6 options to show
      if (new_matches.length > 6) {
        new_matches.pop();
      }
    }
  }

  //removing duplicate IDs
  for (
    var i = 0;
    i < new_matches.length - 1;
    i++ //starting at the beginning, length must be -1 to prevent undefined errors
  ) {
    for (
      var j = i + 1;
      j < new_matches.length;
      j++ //get next in array
    ) {
      if (new_matches[i].id == new_matches[j].id) {
        //remove duplicate
        new_matches.splice(j, 1);
        j -= 1; //compensates for the removed element
      }
    }
  }

  matches = new_matches;

  //add all stations option if there is something in the box
  if (document.getElementById(form_element).value) {
    var match = document.createElement('div');
    match.innerHTML = 'All Stations';
    match.value = '';
    match.name = '';
    match.id = '';
    match.onclick = function() {
      //'this' refers to scope of the function that is created (whatever is in this for loop)
      autocompleteClick(
        this.name,
        this.value,
        form_element,
        match_list_element
      );
    };
    document.getElementById(match_list_element).appendChild(match);
  }

  //populate the html with the matches
  if (matches.length != 0) {
    for (var i = 0; i < matches.length; i++) {
      var match = document.createElement('div'); //kind of like a global variable

      if (matches[i].station_type == 'name') {
        //highlights the matching text for station name
        match.innerHTML =
          '<strong>' +
          matches[i].name.substr(0, entered_text.length) +
          '</strong>';
        match.innerHTML += matches[i].name.substr(
          entered_text.length,
          matches[i].name.length
        );
        if (matches[i].state != undefined) {
          match.innerHTML += ' (' + matches[i].state + ') ';
        }
        match.innerHTML += ' (' + 'ID: ' + matches[i].id + ')';
      } else if (matches[i].station_type == 'id') {
        //highlights the matching text for station ID
        match.innerHTML = matches[i].name;
        if (matches[i].state != undefined) {
          match.innerHTML += ' (' + matches[i].state + ') ';
        }
        match.innerHTML +=
          ' (ID: <strong>' +
          matches[i].id.substr(0, entered_text.length) +
          '</strong>';
        match.innerHTML +=
          matches[i].id.substr(entered_text.length, matches[i].id.length) + ')';
      }
      
      var obj = {}; 

      //testing to see if it is a subordinate station for Tide Predictions and putting this info in an object
      var is_subordinate_station_bool = false;
      if (matches[i].type == "S") { is_subordinate_station_bool = true; }
      if (is_subordinate_station_bool) { obj.subordinate = true; }; 

      match.value = matches[i].id;
      match.name = matches[i].name;
      match.id = matches[i].id;
      
      match.onclick = function() {
        //'this' refers to scope of the function that is created (whatever is in this for loop)
        autocompleteClick(
          this.name,
          this.value,
          form_element,
          match_list_element,
          null,
          obj,
        );
      };
      document.getElementById(match_list_element).appendChild(match);
    }
  } else if (entered_text != '') {
    //no matches are found, so give the submit button option
    //make a custom submit option
    var match = document.createElement('div');
    match.innerHTML = 'Submit ' + '<strong>' + entered_text + '</strong>';
    match.value = entered_text;
    match.name = entered_text;
    match.id = entered_text;
    match.onclick = function() {
      autocompleteClick(
        this.name,
        this.value,
        form_element,
        match_list_element,
        'nomatches'
      );
    };
    document.getElementById(match_list_element).appendChild(match);
  }

  //if there is nothing in the box (autocomoplete form is empty) then update URL
  if (document.getElementById(form_element).value == '') {
    if (api_type == 'data') {
      d_station_id = '';

      //reset products
      $('#productselect #waterlevels-group').show();
      $('#productselect #met-group').show();
      $('#productselect #phys-group').show();
      $('#productselect #currents-group').show();
      //$('#productselect').val('water_level');
      //d_product = 'water_level';

      //clear and reset bin
      d_bin = '';
      document.querySelector('#binselect-section').hidden = true;

      //hide station data inventory showing
      document.querySelector('#stations-product-commentary').hidden = true;

      //show datum disclaimer message and clear datums
      document.querySelector('#datum-disclaimer').hidden = false;
      document.querySelector('#datumselect').innerHTML = '';
    } else if (api_type == 'metadata') {
      document.getElementById('typeselect').disabled = false;
      md_type = document.getElementById('typeselect').value;
      document.querySelector('#md_stationselect_matches').innerHTML = '';
      md_station_id = '';

      //hiding & clearing expand options Datums and Harmonic Constitutes because they do not expand for all stations, only single stations
      updateExpandOptions(); //first redraw and reset all expand options and checkboxes: already resets expand options variable too
      $('#expandselect .option-harcon').hide();
      $('#expandselect .option-datums').hide();
    } else if (api_type == 'derived_product') {
      dp_stationID = '';
    }

    updateURL();
  }
}

//shows different options on the fill out menu based on the station type
function dataAPIStationTypeCheck(match_ID) {
  //open bins in the event its a currents station
  var input_string_raw = match_ID.toUpperCase();
  var input_string_raw = input_string_raw.trim(); //get rid of any white spaces in the text input
  var input_string_original = input_string_raw;
  var input_string = input_string_raw.split('');

  document.querySelector('#stations-product-commentary').hidden = true;

  for (var i = 0; i < input_string.length; i++) {
    input_string[i] = Number(input_string[i]);
  }

  if (
    input_string_original.length == 7 &&
    Number.isInteger(input_string[0]) &&
    Number.isInteger(input_string[1]) &&
    Number.isInteger(input_string[2]) &&
    Number.isInteger(input_string[3]) &&
    Number.isInteger(input_string[4]) &&
    Number.isInteger(input_string[5])
  ) {
    //regular station
    document.querySelector('#binselect-section').hidden = true;
    document.querySelector('#binselect').value = '';
    d_bin = '';
    d_stationtype = 'waterlevel';
  } else if (
    input_string_original.length == 7 &&
    !Number.isInteger(input_string[0]) &&
    !Number.isInteger(input_string[1]) &&
    !Number.isInteger(input_string[2]) &&
    Number.isInteger(input_string[3]) &&
    Number.isInteger(input_string[4]) &&
    Number.isInteger(input_string[5])
  ) {
    //survey current meters example:   BOS1101   doesn't check for caps
    //show bin
    document.querySelector('#binselect-section').hidden = false;

    document.querySelector('#station-name-text').innerHTML = '';
    document.querySelector('#stations-product-commentary').hidden = true;
    d_stationtype = 'survey_current';
  } else if (
    input_string_original.length == 6 &&
    !Number.isInteger(input_string[0]) &&
    !Number.isInteger(input_string[1]) &&
    Number.isInteger(input_string[2]) &&
    Number.isInteger(input_string[3]) &&
    Number.isInteger(input_string[4]) &&
    Number.isInteger(input_string[5])
  ) {
    //for real time current meter example: cb0102
    //show bin
    document.querySelector('#binselect-section').hidden = false;

    document.querySelector('#station-name-text').innerHTML = '';
    document.querySelector('#stations-product-commentary').hidden = true;
    d_stationtype = 'current';
  } else if (
    input_string_original.length == 6 &&
    !Number.isInteger(input_string[0]) &&
    Number.isInteger(input_string[1]) &&
    Number.isInteger(input_string[2]) &&
    Number.isInteger(input_string[3]) &&
    Number.isInteger(input_string[4]) &&
    Number.isInteger(input_string[5])
  ) {
    //also real time current meter example: s09010
    //show bin
    document.querySelector('#binselect-section').hidden = false;

    document.querySelector('#station-name-text').innerHTML = '';
    document.querySelector('#stations-product-commentary').hidden = true;
    d_stationtype = 'current';
  } else {
    document.querySelector('#station-name-text').innerHTML = '';
    document.querySelector('#binselect-section').hidden = true;
  }
}

//when an autocomplete option is clicked, set the station to the selected station and update
function autocompleteClick(
  match_name,
  match_ID,
  text_element,
  clear_element,
  matches_check,
  properties_obj
) {
  if (api_type == 'data') {
    d_station_id = match_ID;
  } else if (api_type == 'metadata') {
    md_station_id = match_ID;
  } else if (api_type == 'derived_product') {
    dp_stationID = match_ID;
  }

  //get the 4th digit and see if its a '-'
  var fourth = match_ID[3];
  if (fourth == '-') {
    //setting affiliation to global
    document.getElementById('globalselection').selected = true;
    dp_affiliation = 'global';
  } else {
    if (matches_check == 'nomatches') {
      document.getElementById(text_element).value = match_name;
    } else {
      if (match_ID == '') {
        document.getElementById(text_element).value = 'All Stations';
      } else {
        document.getElementById(text_element).value =
          match_name + ' (ID: ' + match_ID + ')';
      }
    }
  }

  //specifics for Data API
  if (api_type == 'data' && d_station_id != '') {
    dataAPIStationTypeCheck(match_ID);

    //grab list of datums for product
    var get_data_url =
      '/mdapi/latest/webapi/stations/' +
      d_station_id +
      '/datums.json?units=' +
      d_units;

    //if it is a subordinate tide station, then do not get the datums
    if (properties_obj && properties_obj.hasOwnProperty('subordinate'))
    {
      if (properties_obj.subordinate == true)
      {
        //add only MLLW to the Datum Select because that's the only available one for subordinate tide prediction stations
        var new_datum = document.createElement('option');
        new_datum.value = "MLLW";
        new_datum.text = "MLLW";
        document.getElementById('datumselect').add(new_datum);
        document.getElementById("datumselect").value = "MLLW";
        d_datum = "MLLW";
        
        //set the interval to hilo (or it wont work)
        $("#intervalselect").val('hilo');
        if(d_product == "predictions") { d_interval = "hilo"; }

        //minimum time period must be 'today' or use a begin and end date: time periods of less than 1 day will fail
        $("#date-range-select").val('today');
        d_other = "today";
        

        updateURL();
      }

    }
    else  //is not a subordinate station - get the datums for it from the API
    {
      getData(get_data_url, 'd_datums');
    }

    /*
            *Desc- See what type of station it is based on the ID and update the Product section of the Data API accordingly
            *Hides certain products from the entire list based on which station type it is
            @7 digits: Show Water Level products and Met products
            @Current Meter IDs such as cb1092: Currents or Currents Predictions
        */

    //first reset all options
    $('#productselect #waterlevels-group').show();
    $('#productselect #met-group').show();
    $('#productselect #phys-group').show();
    $('#productselect #currents-group').show();

    if (d_stationtype == 'waterlevel') {
      $('#productselect #currents-group').hide(); //only hide currents
      //$('#productselect').val('water_level');
      //d_product = 'water_level';

      //get Data Inventory for station
      document.querySelector('#station-name-text').innerHTML = name;
      document.querySelector('#stations-product-commentary').hidden = false;
      document.querySelector('#stations-product-commentary').innerHTML =
        "<a id='data-inventory-text' onclick='getDataInventoryLink();'>" +
        "Click for Station's Data Inventory</a>";
      $('#stations-product-commentary').attr('target', '_blank');
    } else if (d_stationtype == 'current') {
      $('#productselect #waterlevels-group').hide(); //only show currents
      $('#productselect #met-group').hide();
      $('#productselect #phys-group').hide();
      $('#productselect').val('currents');
      d_product = 'currents';

      //hide data inventory if its already showing
      document.querySelector('#stations-product-commentary').hidden = true;
      //document.querySelector("#stations-product-commentary").innerHTML = "";
    } else {
    }
  }

  //specifics for the Metadata API
  if (api_type == 'metadata') {
    if (md_station_id != '') {
      //if a single station is selected, disable type as well as in the URL
      document.getElementById('typeselect').disabled = true;
      updateExpandOptions(); //this must be before md_type = "" or else it will not work
      md_type = '';
    } else if (md_station_id == '') {
      //all stations will enable station type and hide some expand options
      document.getElementById('typeselect').disabled = false;
      md_type = document.getElementById('typeselect').value;
      document.querySelector('#md_stationselect_matches').innerHTML = '';

      //hiding & clearing expand options Datums and Harmonic Constitutes because they do not expand for all stations, only single stations
      updateExpandOptions(); //first redraw and reset all expand options and checkboxes: already resets expand options variable too
      $('#expandselect .option-harcon').hide();
      $('#expandselect .option-datums').hide();
    }
  }

  //specifics for DPAPI
  if (api_type == 'derived_product') {
    if (match_ID == '') {
      document.getElementById(text_element).value = 'All Stations';
    } else {
      document.getElementById(text_element).value =
        match_name + ' (ID: ' + match_ID + ')';
    }
  }
  document.getElementById(clear_element).innerHTML = '';
  updateURL();
}

//clear the station text, matches, and data inventory text for Data API. This defaults the autocomplete to 'all stations'
function clearStationTextandMatches(stationselect, stationselect_matches) {
  document.getElementById(stationselect).value = '';
  document.getElementById(stationselect_matches).innerHTML = '';
  document.getElementById('data-inventory-text').hidden = true;
  document.getElementById('datum-commentary').innerHTML = '';

  //clearing station ID in the URl
  if (api_type == 'data') {
    d_station_id = '';
    d_datum = '';

    //hide and reset bin
    d_bin = '';
    document.querySelector('#binselect-section').hidden = true;

    //show datum disclaimer and reset datum dropdown
    document.querySelector('#datum-disclaimer').hidden = false;
    document.querySelector('#datumselect').innerHTML = '';

    //reset products
    $('#productselect #waterlevels-group').show();
    $('#productselect #met-group').show();
    $('#productselect #phys-group').show();
    $('#productselect #currents-group').show();
    $('#productselect').val('water_level');
    d_product = 'water_level';
    showHideInterval('hide');
    showHideInterval2('hide');

  } else if (api_type == 'metadata') {
    md_station_id = '';
    document.getElementById('typeselect').disabled = false;
    md_type = document.getElementById('typeselect').value;
    document.querySelector('#md_stationselect_matches').innerHTML = '';

    //hiding & clearing expand options Datums and Harmonic Constitutes because they do not expand for all stations, only single stations
    updateExpandOptions(); //first redraw and reset all expand options and checkboxes: already resets expand options variable too
    $('#expandselect .option-harcon').hide();
    $('#expandselect .option-datums').hide();
  } else if (api_type == 'derived_product') {
    dp_stationID = '';
  }

  //then update the URL again
  updateURL();
}

//when the enter button is hit for the autocomplete, do different things for the stations
function autocompleteEnterButton(e) {
  if (e.keyCode == 13) {
    //when enter button (keycode 13) is hit for the autocomplete, do different things for each API
    if (e.target.value != '') {
      //if text input not is empty, then the station is 'all stations' or ""
      //all stations
      var first_match = '';

      //different settings based on different data types
      if (api_type == 'data') {
        first_match = document.getElementById('d_stationselect_matches')
          .children[1]; // 1 is the first option after the All Stations option for the autocomplete dropdown options
        d_station_id = first_match.id;
        document.querySelector('#d_stationselect_matches').innerHTML = '';
        dataAPIStationTypeCheck(first_match.id);

        if (d_stationtype == 'waterlevel') {
          //get Data Inventory for station
          document.querySelector('#station-name-text').innerHTML = name;
          document.querySelector('#stations-product-commentary').hidden = false;
          document.querySelector('#stations-product-commentary').innerHTML =
            "<a id='data-inventory-text' onclick='getDataInventoryLink();'>" +
            "Click for Station's Data Inventory</a>";
          $('#stations-product-commentary').attr('target', '_blank');
        } else {
          //hide data inventory if its already showing
          document.querySelector('#stations-product-commentary').hidden = true;
          document.querySelector('#stations-product-commentary').innerHTML = '';
        }
      } else if (api_type == 'metadata') {
        first_match = document.getElementById('md_stationselect_matches')
          .children[1];
        md_station_id = first_match.id;
        document.querySelector('#md_stationselect_matches').innerHTML = '';
        document.querySelector('#typeselect').disabled = true;

        updateExpandOptions();
      } else if (api_type == 'derived_product') {
        first_match = document.getElementById('dp_stationselect_matches')
          .children[1];
        dp_stationID = first_match.id;
        document.querySelector('#dp_stationselect_matches').innerHTML = '';
      }

      //Detects if a station is global and setting the variables accordingly
      if (first_match[3]) {
        var fourth = first_match.id[3];
        if (fourth == '-') {
          // fourth character is a '-' indication a global station
          document.getElementById('globalselection').selected = true;
          dp_affiliation = 'global';
        }
      }

      //existing id available, add to text box
      if (first_match.id) {
        e.target.value = first_match.id;
      }

      updateURL();
    } //single station
    else {
      if (api_type == 'data') {
        d_station_id = '';
      } else if (api_type == 'metadata') {
        md_station_id = '';
      } else if (api_type == 'derived_product') {
        dp_stationID = '';
      }
    }
  }
}

//refreshes all the parameters and updates the URL text
function refresh() {
  setupPage(api_type);
}

//updates the URL based on the form options the user fills out
function updateURL() {
  //start at base URL and add on based on user input
  var new_url;

  //DATA type -----------------------------------------------------------------------------------------------DATA API--------------------------------
  if (api_type == 'data') {
    
    new_url = base_url_dataapi_customized + "datagetter?";
    
    //specify the beginning date
    if (
      d_bdate != '' &&
      document.querySelector('#bdateselect-section').hidden == false
    ) {
      new_url += 'begin_date=' + d_bdate;
    }

    //specify the ending date
    if (
      d_edate != '' &&
      document.querySelector('#edateselect-section').hidden == false
    ) {
      if (d_bdate == '') {
        new_url += 'end_date=' + d_edate;
      } else {
        new_url += '&end_date=' + d_edate;
      }
    }

    //if there is a range
    if (
      d_range != '' &&
      d_range != '0' &&
      document.querySelector('#rangeselect-section').hidden == false
    ) {
      if (d_bdate != '' || d_edate != '') {
        new_url += '&range=' + d_range;
      } else {
        new_url += 'range=' + d_range;
      }
    }

    //if there is other
    if (d_other != '') {
      new_url += 'date=' + d_other;
    }

    //if there is a specific station ID
    if (d_station_id != '') {
      //add the station ID
      new_url += '&station=' + d_station_id;
    }

    //continue to adding the product
    if (d_product != '') {
      if (
        d_bdate != '' ||
        d_edate != '' ||
        (d_range != '' && d_bdate != '') ||
        (d_range != '' && d_edate != '') ||
        d_other != ''
      ) {
        new_url += '&product=' + d_product;
      } else {
        new_url += 'product=' + d_product;
      }
    }

    //specify datum
    if (d_datum != '') {
      new_url += '&datum=' + d_datum;
    }

    //specify timezone
    if (d_timezone != '') {
      new_url += '&time_zone=' + d_timezone;
    }

    //specify interval
    if (d_interval != '') {
      new_url += '&interval=' + d_interval;
    }

    //specify units
    if (d_units != '') {
      new_url += '&units=' + d_units;
    }

    //specify application
    if (d_application != '') {
      new_url += '&application=' + d_application;
    }

    //continue to adding the extension
    if (d_extension != '') {
      new_url += '&format=' + d_extension; //adds in period so md_extension should be xml or json
    }

    //specify bin
    if (d_bin != '') {
      new_url += '&bin=' + d_bin;
    }
  }

  //METADATA Type --------------------------------------------------------------------------------------------METADATA-----------------------------------------
  if (api_type == 'metadata') {
    
    new_url = base_url_mdapi_customized + "webapi/stations";
    
    //if there is a specific station ID
    if (md_station_id != '') {
      //add the station ID
      new_url += '/' + md_station_id;
    }

    //add the resource after station ID (if it exists)
    if (md_resource != '') {
      new_url += '/' + md_resource;
    }

    //continue to adding the extension
    if (md_extension != '') {
      new_url += '.' + md_extension; //adds in period so md_extension should be xml or json
    }

    //continue to adding the type
    if (md_type != '') {
      new_url += '?type=' + md_type;
    }

    //add expand options
    if (expand_array.length != 0) {
      if (md_type == '') {
        new_url += '?expand=' + expand_array[0];
      } else {
        new_url += '&expand=' + expand_array[0];
      }

      if (expand_array.length > 1) {
        for (var i = 1; i < expand_array.length; i++) {
          new_url += ',' + expand_array[i];
        }
      } else {
      }
    }

    //specify units
    if (md_units != '') {
      //if one or more expand options are selected
      if (expand_array.length > 0 || md_type != '') {
        new_url += '&units=' + md_units;
      } else {
        new_url += '?units=' + md_units;
      }
    }
  }

  //Derived Product type -----------------------------------------------------------------------------------DERIVED PRODUCT-------------------------------
  if (api_type == 'derived_product') {
    
    new_url = base_url_dpapi_customized + "webapi/product/";
    
    //adding extention
    if (dp_extension != '') {
      if (dp_product == 'sealvltrends') {
        new_url += '/sealvltrends.' + dp_extension;
      } else {
        new_url += '.' + dp_extension;
      }
    }

    //adding product type
    if (dp_product != '') {
      if (dp_product == 'sealvltrends') {
        //already added in the above
      } else {
        new_url += '?name=' + dp_product;
      }
    }

    //adding station ID
    if (dp_stationID != '') {
      if (dp_product == 'sealvltrends') {
        new_url += '?station=' + dp_stationID;
      } else {
        new_url += '&station=' + dp_stationID;
      }
    }

    //(for product=sea level trends only) adding Afilliation
    if (dp_affiliation != '' && dp_product == 'sealvltrends') {
      if (dp_stationID == '') {
        new_url += '?affil=' + dp_affiliation;
      } else {
        new_url += '&affil=' + dp_affiliation;
      }
    }

    //(for product=yearly inundation) adding Year
    if (dp_product == 'annualflooddays' && dp_year != '') {
      new_url += '&year=' + dp_year;
    }

    //(for product=top ten and extreme water levels) units
    if (
      dp_product != 'annualflooddays' &&
      dp_product != 'sealvltrends' &&
      dp_units != ''
    ) {
      new_url += '&units=' + dp_units;
    }
  }
  document.getElementById('url-box').value = new_url;

  //update the text that shows if its a valid URL or not
  validateURL();
}

//check to see if the URl is valid after converting it to .json
function validateURL() {
  var text_url = document.querySelector('#url-box').value;
  //convert to json to check for validation to make one universal (so no 3 way checks)
  if (text_url.includes('xml')) {
    text_url = text_url.replace('xml', 'json');
  } else if (text_url.includes('csv')) {
    text_url = text_url.replace('csv', 'json');
  }
  getData(text_url, 'find_error');
}


//clears the exapnd options and addes in new checkboxes
function addCheckboxes(
  checkboxarray_names,
  checkboxarray_values,
  clssname,
  id_parentname
) {
  document.querySelector('#' + id_parentname).innerHTML = ''; //clears the parent
  expand_array = []; //clears the expand array
  updateURL();

  for (
    var i = 0;
    i < checkboxarray_names.length;
    i++ //draws each checkbox featured in an array
  ) {
    var new_label = document.createElement('label');
    var new_value = document.createElement('input');
    var new_option = document.createElement('div');

    new_option.className = 'option-' + checkboxarray_values[i];

    new_value.type = 'checkbox';
    new_value.text = checkboxarray_names[i];
    new_value.name = checkboxarray_names[i];
    new_value.className = clssname;
    new_value.value = checkboxarray_values[i];
    new_value.onchange = updateCheckboxes;
    new_value.id = clssname + checkboxarray_names[i] + i;

    new_label.for = new_value.id;
    new_label.innerHTML = checkboxarray_names[i];
    new_label.className = 'checkboxes-label';

    document.querySelector('#' + id_parentname).appendChild(new_option); //creates div to hold both label and checkbox
    document.querySelector('.' + new_option.className).appendChild(new_value);
    document.querySelector('.' + new_option.className).appendChild(new_label);
  }
}

//grab all the input type checkboxes and put them into an array, then update the URL based on those selected values in the array
function updateCheckboxes() {
  //clear the checkboxes array
  expand_array = [];
  resource_array = [];

  //grab all the input types
  var checkboxes = document.getElementsByTagName('input');
  for (var i = 0; i < checkboxes.length; i++) {
    //for the expand checkboxes
    if (
      checkboxes[i].type == 'checkbox' &&
      checkboxes[i].checked == true &&
      checkboxes[i].className == 'expand-class'
    ) {
      //add the checked checkboxes to the expand array
      expand_array.push(checkboxes[i].value);
    }
    //for the resource checkboxes
    else if (
      checkboxes[i].type == 'checkbox' &&
      checkboxes[i].checked == true &&
      checkboxes[i].className == 'resource-class'
    ) {
      //add the checked checkboxes to the resource array
      resource_array.push(checkboxes[i].value);
    } else {
    }
  }
  updateURL();
}
