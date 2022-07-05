


let categories = [];

 // Returns array of category ids

 async function getCategoryIds() {
    
    let res = await axios.get(`https://jservice.io/api/categories?count=100`);
    let catIds = res.data.map((categ) => categ.id);
// get 6 random ids using sampleSize() method from Lodash library
    return _.sampleSize(catIds, 6);
}

// get data from each of the 6 ids

async function getCategory(catId) {
    let res = await axios.get(`https://jservice.io/api/category?id=${catId}`);
    let cat = res.data;
    let allClues = cat.clues;
// get 5 questions of each category
    let randomClues = _.sampleSize(allClues, 5);
// get question and answers from categories
    let clues = randomClues.map((categ) => ({
        question: categ.question,
        answer: categ.answer,
        showing: null
    }));

    return { title: cat.title, clues };
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    $("#jeopardy thead").empty();
  let $tr = $("<tr>");
  for (let catIdx = 0; catIdx < 6; catIdx++) {
    $tr.append($("<th>").text(categories[catIdx].title));
  }
  $("#jeopardy thead").append($tr);

  // Add rows 
  $("#jeopardy tbody").empty();
  for (let clueIdx = 0; clueIdx < 5; clueIdx++) {
    let $tr = $("<tr>");
    for (let catIdx = 0; catIdx < 6; catIdx++) {
      $tr.append($("<td>").attr("id", `${catIdx}-${clueIdx}`).text("?"));
    }
    $("#jeopardy tbody").append($tr);
  }
}


function handleClick(evt) {
    let id = evt.target.id;
  let [catId, clueId] = id.split("-");
  // splitting category and clue;
  let clue = categories[catId].clues[clueId];
  // selecting specific clue

  let msg;

  if (!clue.showing) {
    msg = clue.question;
    clue.showing = "question";
  } else if (clue.showing === "question") {
    msg = clue.answer;
    clue.showing = "answer";
  } 

  $(`#${catId}-${clueId}`).html(msg);
  $(`#${catId}-${clueId}`).html(msg).css("color", "black");
}

async function setupAndStart() {
    let catIds = await getCategoryIds();
  
    categories = [];
  
    for (let catId of catIds) {
      categories.push(await getCategory(catId));
    }
  
    fillTable();
  }
  
  // Restart game On Click of Restart Game button  
  
  $("#restart").on("click", setupAndStart);
  
  
  $(async function () {
    setupAndStart();
    $("#jeopardy").on("click", "td", handleClick);
  });


