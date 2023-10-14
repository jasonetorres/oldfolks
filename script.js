const whenIWasYourAgeLines = [
        "When I was your age, we had to walk uphill both ways to school!",
        "Back in my day, we didn't have smartphones, we had to use payphones!",
        "In my time, we had to wait for our favorite song to play on the radio to record it on a cassette tape!",
        "When I was your age, we didn't have the internet; we had to use encyclopedias for research!",
        "We didn't have streaming services when I was young; we had to rent VHS tapes from the video store!",
        "In the old days, we had to wait for the newspaper to get our news!",
        "Back in the day, we had to blow on our video game cartridges to make them work!",
        "When I was your age, we had to memorize phone numbers, not just store them in our phones!",
        "In my day, we had to go to the library to do our homework; there was no Google!",
        "We didn't have GPS navigation in our cars when I was young; we used paper maps!",
        "When I was your age, we didn't have text messaging; we passed notes in class!",
        "Back in the old days, we had to wind up our watches to make them work!",
        "In my time, we had to use a TV antenna to get a clear signal on the television!",
        "We didn't have digital cameras when I was young; we used film and had to wait for it to be developed!",
        "When I was your age, we had to wait for Saturday morning cartoons; there was no 24/7 cartoon network!",
        "In the past, we didn't have remote controls for our TVs; we had to get up and change the channel manually!",
        "We didn't have instant messaging when I was young; we wrote letters and used snail mail!",
        "When I was your age, we had to go to the bank to deposit a check; there was no mobile banking!",
        "Back in my day, we had to stand in line at the payphone to make a call!",
        "In my time, we had to use a typewriter to write our papers; no spell check or auto-correct!",
        "We didn't have digital music downloads when I was young; we bought CDs and cassettes!",
        "When I was your age, we had to use a phone book to look up phone numbers!",
        "In the old days, we had to wait for the TV schedule to watch our favorite shows; no on-demand streaming!",
        "Back in the day, we had to wait for the film to be developed to see our photos!",
        "When I was your age, we had to dial a rotary phone; no touchscreens!",
        "In my day, we had to use a card catalog to find books in the library!",
        "We didn't have instant hot water in our showers when I was young; we had to wait for it to heat up!",
        "When I was your age, we had to go to the store to buy physical copies of video games!",
        "In the past, we didn't have digital calendars and reminders; we used paper planners!",
        "Back in my day, we had to use a paper map for road trips; no GPS navigation!",
        "We didn't have email when I was young; we wrote letters and sent them by post!",
        "When I was your age, we had to use a film camera and carefully choose our shots; no unlimited photos!",
        "In my time, we had to use a dictionary to look up words; no online definitions!",
        "We didn't have automatic coffee makers when I was young; we brewed coffee manually!",
        "When I was your age, we had to use a payphone to call for a ride!",
        "Back in the old days, we had to rewind VHS tapes before returning them to the video store!",
        "In the past, we didn't have online gaming; we played multiplayer games in the same room!",
        "We didn't have smartphones with built-in cameras when I was young; we carried separate cameras!",
        "When I was your age, we had to use a card catalog to find books in the library!",
        "In my day, we had to look up movie showtimes in the newspaper; there was no online booking!",
        "Back in my day, we had to go to the arcade to play video games; no gaming consoles at home!",
        "We didn't have online shopping when I was young; we went to physical stores!",
        "When I was your age, we had to use a paper map for road trips; no GPS navigation!",
        "In the past, we didn't have digital music; we listened to vinyl records and cassette tapes!",
        "We didn't have electric toothbrushes when I was young; we brushed our teeth manually!",
        "When I was your age, we had to write down phone numbers in an address book; no contacts app!",
        "Back in the old days, we had to use a landline to call our friends; no mobile phones!",
        "In my time, we had to watch commercials on TV; there was no skipping them!",
        "We didn't have voice assistants like Siri or Alexa when I was young; we had to look up information ourselves!", 
  ];
  
  const generateButton = document.getElementById("generate");
  const quoteElement = document.getElementById("quote");
  
  generateButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * whenIWasYourAgeLines.length);
      const randomQuote = whenIWasYourAgeLines[randomIndex];
      quoteElement.textContent = randomQuote;
  });
  