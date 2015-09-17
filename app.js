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
    	var num = parseInt($(this).text());
    	var assignedGrps = makeGrps2(num);
    });

    //Function accepts a number to decide the number of groups 
    var makeGrps = function(numGrpsCreate){
    	classArray.sort(randOrd);
    	console.log(classArray);
    	var studPerGrp = Math.ceil(classArray.length/numGrpsCreate);
    	var studentNum = 0;
    	var studentName = "";
    	var groups = [];
    	for (var i = 0; i < numGrpsCreate; i++){
    		groups.push([]);
    	};
    	for(var i = 0; i < numGrpsCreate; i++){
    		for(var j = 0; j < studPerGrp && studentNum < classArray.length - 1; j++){
    			studentNum = i * studPerGrp + j;
    			studentName = classArray[studentNum];
    			// groups[i][j]=(studentName);
    			groups[studentNum%numGrpsCreate].push(studentName);
    			console.log(studentName);
    		};
    	};
    	console.log(groups);
    	return groups;

    };
    function randOrd(){
    	return (Math.round(Math.random())-0.5); 
    }
    function addGrpToDOM (groups){

    }
    function makeGrps2 (numGrpsCreate){
    	for(i=0; i < numGrpsCreate; i++){
    		$(".grpAssign").append("<div class='group" + (i + 1) + "'></div>");
    	$(".group"+(i+1)).prepend("<h2>Group "+(i+1)+"</h2>");
    	}
    	while (classArray.length) {
    		for (j=1; j <= numGrpsCreate && classArray.length; j++) {
    			var thing = ".group" + j;
    			$(thing).append(classArray[0] + "<br/>");
    			console.log(classArray[0]);
    			classArray.shift();
    		}
    	}
    };

    function nameGroups(groupNum) {
    }
});