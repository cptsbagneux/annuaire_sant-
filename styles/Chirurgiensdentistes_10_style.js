var size = 0;
var placement = 'point';

var style_Chirurgiensdentistes_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10.4px \'Verdana\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_Chirurgiensdentistes_10(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Chirurgiensdentistes_10rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,242,64,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,242,64,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Chirurgiensdentistes_10rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,242,64,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,242,64,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Chirurgiensdentistes_10rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 11.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,242,64,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,242,64,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Chirurgiensdentistes_10rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 14.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,242,64,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,242,64,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Chirurgiensdentistes_10(feature, value);
        ;

    return style;
};
