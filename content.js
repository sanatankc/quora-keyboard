// Checks every second if paged_list_wrapper is avaliable in dom or not i.e 
// if it has been loaded from ajax and if it is available calls main() function
const checkAjax = 
  setInterval(() => {
    if($('.paged_list_wrapper').length === 2){
      main()
      clearInterval(checkAjax)
    }
  }, 1000)

// Main funtion
function main() {
  const next_key = 107
  const prev_key = 106
  // selects answer wrapper list
  const itemsIdList = []
  const answerNodeList = $('.paged_list_wrapper')[1].children

  // beacause quora by default have focus on search bar
  // it will pickup all of our keypress in search bar so 
  // to clear we have blur() it which is opposite of focus()
  $('textarea.selector_input.text').blur()
  
  // loops over the list pushes their id's to itemsIdList
  for (let i = 0; i < answerNodeList.length; i++) {
    if (answerNodeList[i].children.length !== 0) {
      itemsIdList.push('#' + answerNodeList[i].id)
    }
  }

  $(document).keypress(function(e) {
    if (e.keyCode === next_key) {
        console.log($(itemsIdList[0]))
    }
  })

  const answerItemsIdList = 
    itemsIdList
      .filter((itemId) => $(itemId).children().hasClass('AnswerStoryBundle'))

  console.log(selectAnswer(answerItemsIdList[0]))
}

function selectAnswer(element) {
  $(element).css('border', '4px solid #999')
  return $(element).find('.more_link')
}
