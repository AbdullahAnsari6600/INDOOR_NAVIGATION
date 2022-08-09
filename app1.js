// JavaScript code

// let block1 = ['1001', '1002', '1003', '1004', "dean office", 'ladies room', 'lr' ]
let block2 = ['2001', '2002', '2003', '2004'  ]
// let block3 = ['3001', '3002', '3003', '3004'  ]
// let block4 = ['4001', '4002', '4003', '4004'  ]
// let block5 = ['5001', '5002', '5003', '5004' ]
 




let   search_block1;                                                                                                                                                                                                                                                                                   ;
function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();

    let x = document.getElementsByClassName('card');

    for (i = 0; i < block2.length; i++) {
        if (!block2.includes(input)) {
            search_block1 = "";
        }
        else {
            search_block1= "1";
            
        }
    }
    for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(search_block)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}


}
