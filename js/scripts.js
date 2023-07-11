// START

// initialization of variables
// 
let standWithUkraine = document.querySelector('.stand-with-Ukraine');
let infoPortfolioAndContacts = document.querySelector('.info-portfolio-and-contacts');
let logo = document.querySelector('.logo');
let logo_info = document.querySelector('.logo_info');
// start styles of elements with dinamic effects  

// add start  styles for logo
logo.style. marginTop = '80px';

// add start height, styles for transitionEachRowWrappers,
// transitionEachRowTexts
// 
let transitionEachRowWrapperAll = document.getElementsByClassName(
    'transitionEachRowWrapper'
    );
for(let transitionEachRowWrapper of transitionEachRowWrapperAll ){
    let transitionEachRowText = transitionEachRowWrapper.firstElementChild;

    // add height for rowWrapper
    transitionEachRowWrapper.style.height = 
    transitionEachRowText
    .getBoundingClientRect()
    .height 
    + 'px';
    transitionEachRowWrapper.style.position = 'relative';
    transitionEachRowWrapper.style.overflow = 'hidden';

    transitionEachRowText.style.position = 'absolute';
    transitionEachRowText.style.transition = 'top ease 2s';

    transitionEachRowText.style.top = 
    transitionEachRowText
    .getBoundingClientRect()
    .height  
    + 'px'; 

    if( pageYOffset >= 0 && pageYOffset <= 700 ){
        transitionEachRowText.style.top = '0';
    } else {
        transitionEachRowText.style.top = 
        transitionEachRowText.getBoundingClientRect().height
        + 'px';
    }
}

// add start height, width, styles for OverlayTransition,
// OverlayTransitionContent
// 
let OverlayTransitionContentAll = 
document.getElementsByClassName(
    'OverlayTransitionContent'
    );
for(let OverlayTransitionContent of OverlayTransitionContentAll){
    let OverlayTransition = OverlayTransitionContent.firstElementChild;

    // add width for OverlayTransition
    OverlayTransition.style.height = 
    OverlayTransitionContent
    .getBoundingClientRect()
    .height
    + 'px';
    OverlayTransition.style.width = 
    OverlayTransitionContent
    .getBoundingClientRect()
    .width 
    *3
    + 'px';

    OverlayTransitionContent.style.position = 'relative';
    OverlayTransitionContent.style.overflow = 'hidden';

    OverlayTransition.style.background = 'green';
    OverlayTransition.style.position = 'absolute';
    OverlayTransition.style.transition = 'top ease 3s';
    OverlayTransition.style.boxShadow = 
    ' 0 -25px 15px rgba(0,128,1)' ;
}


// CHANGES

// scroll: add listeners
// 
window.addEventListener('scroll', function(e) {

     if(logo.getBoundingClientRect().y <= 39){
        logo.style.display = 'flex';
        logo.style.alignItems = 'flex-end';
        logo.style. marginTop = '0px';
        logo_info.style. marginLeft = '20px';
    } else {
        logo.style.display = 'block';
        logo.style. marginTop = '80px';
        logo_info.style. marginLeft = '0%';
    }
    
    // 
    standWithUkraine.innerHTML = pageYOffset + 'px';
    
    // 
    if(infoPortfolioAndContacts.getBoundingClientRect().y == 42){
        standWithUkraine.style.color = 'red';
        standWithUkraine.style.marginRight = '45%';
    } else {
        // standWithUkraine.style.color = 'yellow';
        standWithUkraine.style.marginRight = '8.13%';
    }

        console.log(document.documentElement.clientWidth)
    // if(document.documentElement.clientWidth <= 375 
    //     && 
    //    infoPortfolioAndContacts.getBoundingClientRect().y == 42 
    // )
    // {
    //     standWithUkraine.style.justifyContent = 'flex-start';
    // }
    
    // blocks(sticky position, dinamic effects)
    let blocksAll = 
        document.getElementsByClassName('block');
    for( let block of blocksAll){
        if(
            block.getBoundingClientRect().top >= -1000 
            && 
            block.getBoundingClientRect()
                .top 
                <= 
                document.documentElement.clientHeight*0.4 
        )
        {
            block.style.background = 'green';
            let transitionEachRowTextAll = 
                block.getElementsByClassName('transitionEachRowText');
            for( let transitionEachRowText of transitionEachRowTextAll ){
                transitionEachRowText.style.top = '0';
            }
            let OverlayTransitionAll = 
                block.getElementsByClassName('OverlayTransition');
            for( let OverlayTransition of OverlayTransitionAll ){
                // OverlayTransition.style.top = '0';
                OverlayTransition.style.top = 
                    OverlayTransition
                        .getBoundingClientRect()
                        .height
                    +25
                    + 'px';
            }
        }
        else 
        {
            block.style.background = 'grey';
            let transitionEachRowTextAll = 
            block.getElementsByClassName('transitionEachRowText');
            for( let transitionEachRowText of transitionEachRowTextAll ){
                transitionEachRowText.style.top = 
                transitionEachRowText.getBoundingClientRect().height
                + 'px'  ;
            }
            let OverlayTransitionAll = 
            block.getElementsByClassName('OverlayTransition');
            for( let OverlayTransition of OverlayTransitionAll ){
                OverlayTransition.style.top = '0';
            }
        }
    };

    // header(dinamic effects) 
    let header = document.querySelector('header');  
    if( pageYOffset > header.getBoundingClientRect().height*0.7)
    {
        header.style.background = 'red';
        let transitionEachRowTextAll = header.getElementsByClassName('transitionEachRowText');
        for( let transitionEachRowText of transitionEachRowTextAll ){
            transitionEachRowText.style.top = 
            transitionEachRowText.getBoundingClientRect().height
            + 'px'  ;                           
        }
    };
//end of  window.addEventListener('scroll', function(e) {...})
});