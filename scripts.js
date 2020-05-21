window.addEventListener('load', function(){

let blastOff = document.getElementById('takeOff');
let landing = document.getElementById('landing');
let abortMission = document.getElementById('missionAbort');

let flightStatus = this.document.getElementById('flightStatus');
let shuttleBackground = this.document.getElementById('shuttleBackground');
let spaceShuttleHeight = this.document.getElementById('spaceShuttleHeight');


    
    blastOff.addEventListener("click", function (event) {
      let result = window.confirm("Confirm that the shuttle is ready for takeoff.")
       if(result){
           flightStatus.innerHTML = 'Shuttle in flight.'
           shuttleBackground.style.backgroundColor = 'blue';
           spaceShuttleHeight.innerHTML = 10000;
       }
    });

    landing.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged');
            flightStatus.innerHTML = 'The shuttle has landed.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
    });

    abortMission.addEventListener('click', function(){
        let result = window.confirm('Conrm that you want to abort the mission');
        if(result){
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }

    });

    let up = this.document.getElementById('up');
    let down = this.document.getElementById('down');
    let left = this.document.getElementById('left');
    let right = this.document.getElementById('right');

    let rocket = this.document.getElementById('rocket');

    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
    rocket.style.left = '0px';

    up.addEventListener('click', function(){
        let distFromBot = parseInt(rocket.style.bottom);
        distFromBot += 10;
        rocket.style.bottom = distFromBot + 'px';

        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    });

    down.addEventListener('click', function(){
        let distFromBot = parseInt(rocket.style.bottom);
        distFromBot -= 10;
        rocket.style.bottom = distFromBot + 'px';

        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    });

    right.addEventListener('click', function(){
        let distFromLeft = parseInt(rocket.style.left);
        distFromLeft += 10;
        rocket.style.left = distFromLeft + 'px';
                
    });

    left.addEventListener('click', function(){
        let distFromLeft = parseInt(rocket.style.left);
        distFromLeft -= 10;
        rocket.style.left = distFromLeft + 'px';
                
    });


});

