var data = [
    { id: 1, staff: 'Aslamjon', startDate: '2021-01-04', endDate: '2021-01-24', des: 'zapchas.uz ni to\'liq yaratish', status: 'doing',rejected: false},
    { id: 2, staff: 'Doston', startDate: '2021-01-04', endDate: '2021-01-24', des: 'sgd.uz ni desktopi', status: 'pending',rejected: false},
    { id: 3, staff: 'Bekzod', startDate: '2021-01-04', endDate: '2021-01-24', des: 'CodeBox ni yaratish', status: 'done',rejected: false},
    { id: 4, staff: 'Stiv', startDate: '2021-01-04', endDate: '2021-01-24', des: 'apple ni yaratish', status: 'rejected',rejected: false},
];


function writeData() {
    document.forms['pending'].innerHTML = '';
    document.forms['doing'].innerHTML = '';
    document.forms['done'].innerHTML = '';
    document.forms['rejected'].innerHTML = '';
    for (let i = 0; data.length > i; i++) {
        if (data[i].status == 'pending') {
            if (data[i].rejected === true) {
                let rejectedTrue = 'rejected';
                document.forms['pending'].innerHTML +=
                '<h4>' + data[i].staff + '</h4>' +
                '<p>' + data[i].des + '</p>' +
                '<p>Start date: ' + data[i].startDate + '</p>' +
                '<p>End date: ' + data[i].endDate + '</p>'+
                '<p class="text-danger">'+ rejectedTrue +'</p>'+
                `<select name="select" id="pending" class="form-control mt-1 mb-1">`+ 
                `<option value="${data[i].status}" >`+ 'Status' +`</option>`+
                `<option value="doing">`+ 'doing' +`</option>
                <option value="done">`+ 'done' +`</option> </select> ` +
                '<button type="button" class="btn btn-warning mt-1 text-white" onclick="edit('+data[i].id+')">edit</button>' +
                `<button type="button" class="btn btn-danger ml-3 mt-1" onclick="deleteData(${data[i].id})">delete</button>` +
                '<br> <hr class="bg-dark"> </br>'
            }
            else {
                let rejectedTrue = '';
                document.forms['pending'].innerHTML +=
                '<h4>' + data[i].staff + '</h4>' +
                '<p>' + data[i].des + '</p>' +
                '<p>Start date: ' + data[i].startDate + '</p>' +
                '<p>End date: ' + data[i].endDate + '</p>'+
                '<p class="text-danger">'+ rejectedTrue +'</p>'+
                `<select name="select" id="pending" class="form-control mt-1 mb-1">`+ 
                `<option value="${data[i].status}" >`+ 'Status' +`</option>`+
                `<option value="doing">`+ 'doing' +`</option>
                <option value="done">`+ 'done' +`</option> </select> ` +
                '<button type="button" class="btn btn-warning mt-1 text-white" onclick="edit('+data[i].id+')">edit</button>' +
                `<button type="button" class="btn btn-danger ml-3 mt-1" onclick="deleteData(${data[i].id})">delete</button>` +
                '<br> <hr class="bg-dark"> </br>'
            }
            
        };

        if (data[i].status == 'doing') {
            if (data[i].rejected === true) {
                let rejectedTrue = 'rejected';
                document.forms['doing'].innerHTML +=
                '<h4>' + data[i].staff + '</h4>' +
                '<p>' + data[i].des + '</p>' +
                '<p>Start date: ' + data[i].startDate + '</p>' +
                '<p>End date: ' + data[i].endDate + '</p>'+
                '<p class="text-danger">'+ rejectedTrue +'</p>'+
                `<select name="select" id="doing" class="form-control mt-1 mb-1">`+
                `<option value="${data[i].status}">`+ 'Status' +`</option>`+
                `<option value="pending">pending</option>
                <option value="done">`+ 'done' +`</option> </select>`+
                '<button type="button" class="btn btn-warning mt-1 text-white" onclick="edit('+ data[i].id +')">edit</button>' +
                `<button type="button" class="btn btn-danger ml-3 mt-1" onclick="deleteData(${data[i].id})">delete</button>` +
                `<br> <hr class="bg-dark"> <br>`
            }
            else {
                let rejectedTrue = '';
                document.forms['doing'].innerHTML +=
                '<h4>' + data[i].staff + '</h4>' +
                '<p>' + data[i].des + '</p>' +
                '<p>Start date: ' + data[i].startDate + '</p>' +
                '<p>End date: ' + data[i].endDate + '</p>'+
                '<p class="text-danger">'+ rejectedTrue +'</p>'+
                `<select name="select" id="doing" class="form-control mt-1 mb-1">`+
                `<option value="${data[i].status}">`+ 'Status' +`</option>`+
                `<option value="pending">pending</option>
                <option value="done">`+ 'done' +`</option> </select>`+
                '<button type="button" class="btn btn-warning mt-1 text-white" onclick="edit('+ data[i].id +')">edit</button>' +
                `<button type="button" class="btn btn-danger ml-3 mt-1" onclick="deleteData(${data[i].id})">delete</button>` +
                `<br> <hr class="bg-dark"> <br>`
            }
        };

        if (data[i].status == 'done') {
            document.forms['done'].innerHTML +=
                '<h4>' + data[i].staff + '</h4>' +
                '<p>' + data[i].des + '</p>' +
                '<p>Start date: ' + data[i].startDate + '</p>' +
                '<p>End date: ' + data[i].endDate + '</p>'+
                '<button type="button" class="btn btn-secondary mt-1 text-white" onclick="toRej('+ data[i].id +')">rejected</button>' +
                `<br> <hr class="bg-dark"> <br>`
        };

        if (data[i].status == 'rejected') {
            document.forms['rejected'].innerHTML +=
                '<h4>' + data[i].staff + '</h4>' +
                '<p>' + data[i].des + '</p>' +
                '<p>Start date: ' + data[i].startDate + '</p>' +
                '<p>End date: ' + data[i].endDate + '</p>'+
                `<select name="select" id="rejected" class="form-control mt-1 mb-1">`+
                `<option value="${data[i].status}">Status</option>`+
                `<option value="doing">doing</option>
                <option value="pending">pending</option>
                <option value="done">done</option> </select>`+
                '<button type="button" class="btn btn-warning mt-1 text-white" onclick="edit('+ data[i].id +')">edit</button>' +
                `<br> <hr class="bg-dark"> <br>`
        };
    };
}

writeData()

function addTask() {
    let area = document.forms['add']['area'].value;
    let select = document.forms['add']['select'].value;
    let startDate = document.forms['add']['startDate'].value;
    let endDate = document.forms['add']['endDate'].value;
    let status = document.forms['add']['status'].value;
    if (area !== '' && select !== '' && startDate !== '' && endDate !== '' && status !== '') {
        let obj = {
            id:data.length+1,
            staff:select,
            startDate:startDate,
            endDate:endDate,
            des:area,
            status:status,
            rejected: false
        };
        data.push(obj);
        writeData();
        document.forms['add'].reset()
    }
    else {
        alert('Formani to\'ldiring')
    }
    
}

function deleteData(id) {
    for (let i = 0; data.length > i; i++) {
        if (data[i].id === id){
            data.splice(i,1);
            writeData()
        }
    }
}

function edit(id) {
    for (let i = 0; data.length > i; i++) {
        if (data[i].id === id) {
            if (data[i].status == 'pending') {
                var pend = document.getElementById('pending').value;
                // var pend = document.forms['pending']['select'].value;
                data[i].status = pend;
                writeData()
                console.log(pend);
            }
            else if (data[i].status == 'doing') {
                var pend = document.getElementById('doing').value;
                // var pend = document.forms['doing']['select'].value;
                data[i].status = pend;
                writeData()
                console.log(pend);
            }
            else if (data[i].status == 'done') {
                var pend = document.getElementById('done').value;
                // var pend = document.forms['done']['select'].value;
                data[i].status = pend;
                writeData()
                console.log(pend);
            }
            else if (data[i].status == 'rejected') {
                var pend = document.getElementById('rejected').value;
                // var pend = document.forms['rejected']['select'].value;
                data[i].status = pend;
                data[i].rejected = true;
                writeData()
                console.log(pend);
            }
        }
    }
}
function toRej(id){
    for (let i = 0; data.length > i; i++) {
        if (data[i].id === id) {
            if (data[i].status == 'done') {
                // var pend = document.getElementById('done').value;
                // var pend = document.forms['done']['select'].value;
                data[i].status = 'rejected';
                writeData()
            }
        }
    }
}

document.getElementById('openTask').onclick = function() {

    document.querySelector('.first').classList.toggle('active');

}