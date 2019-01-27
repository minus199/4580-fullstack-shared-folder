// TODO: create a makeCounter function that will allow us to do the following:
function makeCounter(counterId, initialValue = 0) {
  const id = counterId;
  let counter = initialValue;

  function changeValue(by) {
    counter = counter + by;
    return counter;
  }

  return {
    increment: function() {
      return changeValue(1);
    },
    decrement: function() {
      return changeValue(-1);
    },
    getCount: function() {
      return counter;
    },
    getID: function() {
      return id;
    },
    /**
     *
     * @param otherCounter the other counter to compare with the current
     * @returns 1 if current count is bigger, -1 if other count is bigger, else 0
     */
    compare: function(otherCounter) {
      const delta = this.getCount() - otherCounter.getCount();

      if (delta > 0) {
        return 1;
      }

      if (delta < 0) {
        return -1;
      }

      return 0;
    }
  };
}

// We know we already have 15 people before creating the counter
const peopleCounter = makeCounter("people", 15);
const chairsCounter = makeCounter("chairs");
const counters = [peopleCounter, chairsCounter];

while (chairsCounter.getCount() < 10) {
  chairsCounter.increment();
}

peopleCounter.decrement(); // Someone left the room
chairsCounter.decrement(); // Someone took a chair from the room
chairsCounter.decrement(); // Someone took another chair from the room
for (let i = 0; i < counters.length; i++) {
  const counter = counters[i];
  console.log(`${counter.getID()} Counter has ${counter.getCount()}`);
}

switch (peopleCounter.compare(chairsCounter)) {
  case 1:
    console.log(`We have too many chairs`);
    break;
  case -1:
    console.log(`We dont have enough chairs`);
    break;
  default:
    console.log(`We exactly as many chairs as we need.`);
    break;
}



 מ