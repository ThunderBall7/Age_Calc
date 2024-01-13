const arrow = document.querySelector(".down-arrow");

arrow.addEventListener("click", function(x) {

    setInterval( function (){
    x.preventDefault();

    let day_data = document.getElementById("enter-day").value;
    let month_data = document.getElementById("enter-month").value;
    let year_data = document.getElementById("enter-year").value;


    let current_year = new Date().getFullYear();
    
    // if (date_data > 31 || month_data > 12 || year_data > current_year ){
    //     alert('please enter details in correct format')
    if (day_data > 31){
        document.getElementById("day_error").innerHTML = "Invalid Day";
    }else if (month_data > 12){
        document.getElementById("month_error").innerHTML = "Invalid Month";
    }else if (year_data > current_year){
        document.getElementById("year_error").innerHTML = "Invalid Year";
    }
    else {
        // console.log(day_data, month_data, year_data)
        document.getElementById("day_error").innerHTML = "";
        document.getElementById("month_error").innerHTML = "";
        document.getElementById("year_error").innerHTML = "";

        let my_date = new Date(`${month_data}/${day_data}/${year_data}`);
       
        let new_date = new Date();

        const time_diff = Math.abs(my_date - new_date);

        let year_diff = Math.abs(my_date.getFullYear() - new_date.getFullYear());
        let month_diff = Math.abs(my_date.getMonth() - new_date.getMonth());
        let day_diff = Math.abs(my_date.getDate() - new_date.getDate());
        let seconds_diff = Math.floor((time_diff % (1000 * 60)) / 1000);



        
        // let hours_diff = Math.floor((time_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // let minutes_diff = Math.floor((time_diff % (1000 * 60 * 60)) / (1000 * 60));

        // console.log("Remaining Years:", year_diff);
        // console.log("Remaining Months:", month_diff);
        // console.log("Remaining Hours:", hours_diff);
        // console.log("Remaining Minutes:", minutes_diff);
        // console.log("Remaining Seconds:", seconds_diff);

        document.querySelector(".span-years").innerHTML = `${year_diff}`;
        document.querySelector(".span-months").innerHTML = `${month_diff}`;
        document.querySelector(".span-days").innerHTML = `${day_diff}`;
        document.querySelector(".span-seconds").innerHTML = `${seconds_diff}`;



        
    }
})},1000)
