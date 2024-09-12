document.querySelector('.btn-seo-contact1').addEventListener('click', function() {
    alert('hello');
});

//this above will give an alert with the click

--------------------------------------------------------------------------------
  
document.querySelector('.btn-seo-contact1').addEventListener('click', function() {
    alert('hello');
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'contact_button_click'
    });
});

//button click listener 

---------------------------------------------------------------------------------
document.querySelector('.btn-seo-contact1').addEventListener('click', function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'contact_button_click'
    });
});

// this will work when someone will click on the button that class is mentioned in the scripe and will send the DL .
