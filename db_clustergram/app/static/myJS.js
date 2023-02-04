
(function(){
  if(!window.dash_clientside) {window.dash_clientside = {};}
  window.dash_clientside.clientside = {

      CreateCloseButtons: () => {
      
        var y = document.getElementById("edition-items");
        items = y.getElementsByClassName('accordion-item');
        console.log(items.length);
        
        if (items.length > 0) {
          for(var i = 0; i < items.length; i++) {      
          
            var button = document.createElement("button");
            button.setAttribute('type', 'button');
            button.id = 'close-'+i;
            button.innerHTML = "<i class='fa fa-times' aria-hidden='true'></i>";
            button.className = 'mt-2 ms-2 me-2 h34 btn btn-outline-danger btn-sm';
            button.style.width = '20px';
            button.onclick = function() { alert('Do you want close it?'); };

            header = items[i].getElementsByClassName('accordion-header')[0];        
            header.getElementsByClassName('accordion-button')[0].setAttribute('style', 'display: inline-flex;');
            counts = header.getElementsByTagName('button');
            if (counts.length == 1) {
              header.appendChild(button);
            };
          };
        };
//        console.log(items[0]);

        return ''
      },
      
      
  }
})();

function CloseItem() {
  console.log('');
}


