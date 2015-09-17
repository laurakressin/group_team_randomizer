$(function(){
	var classArray = [
        "Aarti",
        "Danielle",
        "David B.",
        "Brian",
        "David H.",
        "Amelia",
        "Geoffrey",
        "Jacob",
        "Manu",
        "John",
        "Jonathan",
        "Laura",
        "Lauren",
        "Erick",
        "Nicholas",
        "Doug",
        "Ryan",
        "Sarah",
        "Zachary",
        "Liz"
    ];
    //
    $('.numGrps').on('click', function(){
    	$("button").show();
    	$(".numGrps").removeClass("current");
    	var num = parseInt($(this).text());
    	var assignedGrps = makeGrps2(num);
    	$(this).addClass("current");
    });

    //Function accepts a number to decide the number of groups 
    // var makeGrps = function(numGrpsCreate){
    // 	classArray.sort(randOrd);
    // 	console.log(classArray);
    // 	var studPerGrp = Math.ceil(classArray.length/numGrpsCreate);
    // 	var studentNum = 0;
    // 	var studentName = "";
    // 	var groups = [];
    // 	for (var i = 0; i < numGrpsCreate; i++){
    // 		groups.push([]);
    // 	};
    // 	for(var i = 0; i < numGrpsCreate; i++){
    // 		for(var j = 0; j < studPerGrp && studentNum < classArray.length - 1; j++){
    // 			studentNum = i * studPerGrp + j;
    // 			studentName = classArray[studentNum];
    // 			// groups[i][j]=(studentName);
    // 			groups[studentNum%numGrpsCreate].push(studentName);
    // 			console.log(studentName);
    // 		};
    // 	};
    // 	console.log(groups);
    // 	return groups;

    // };
    function randOrd(){
    	return (Math.round(Math.random())-0.5); 
    }
    function duplicate (array){
    	return array.slice(0);
    }
    function makeGrps2 (numGrpsCreate){
    	$(".grpAssign").text("");
    	for(i=0; i < numGrpsCreate; i++){
    		$(".grpAssign").append("<div class='group" + (i + 1) + "'></div>");
    	$(".group"+(i+1)).prepend("<h2>Group "+(i+1)+"</h2>");
    	}
    	classArray.sort(randOrd);
    	var newClassArray = duplicate(classArray);
    	while (newClassArray.length) {
    		for (j=1; j <= numGrpsCreate && newClassArray.length; j++) {
    			var thing = ".group" + j;
    			$(thing).append(newClassArray[0] + "<br/>");
    			console.log(newClassArray[0]);
    			newClassArray.shift();
    		}
    	}
    };

    $(".refresh").on("click", function(){
    	var num = parseInt($(".current").text());
    	makeGrps2(num);
    })

    function nameGroups(groupNum) {
    }
});