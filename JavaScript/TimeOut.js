function Stopwatch(){

    let startTime=0, duration =0, running = false, seconds =0, endTime=0;
    
        

  Stopwatch.prototype.duration = this.duration;

   Stopwatch.prototype.reStart = function(){
     
    console.log(this.running,this.duration);
   
        this.startTime =0;
        this.endTime =0;
        this.running= false;
        this.duration =0;
        this.seconds =0;
    }

    Stopwatch.prototype.start = function(){
        if(!running === false)
        throw new Error('Timer already Started...');
        
        console.log(' we have started the timer...');
        this.running = true;
        this.startTime = new Date();

        return this.startTime;
    }

    Stopwatch.prototype.stop = function() {
        if(!this.running === true)
        throw new Error('No timer to stop...')
        this.running = false;
        
    console.log(' Timer stopped');
    this.endTime = new Date();
    this.seconds =  (this.endTime.getTime() - this.startTime.getTime())/1000 ;

    this.duration += this.seconds;

    }

}

const sw = new Stopwatch();


//console.log('Duration', sw.duration());
