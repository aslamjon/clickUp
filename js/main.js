var task_list = [
    {
        id: 1,
        description: 'sgd.uz ni desktop ko\'rinishi',
        staff: 'Aslamjon',
        start_date: '2021-01-21',
        end_date: '2021-01-25',
        status: 'pending',
        isRejected: false
    },
];

var defStatus = null;

getTaskList();

function getTaskList() {
    document.getElementById('pendingList').innerHTML = '';
    document.getElementById('doingList').innerHTML = '';
    document.getElementById('successList').innerHTML = '';
    document.getElementById('rejectedList').innerHTML = '';
    for (let i = 0; i < task_list.length; i++) {
        if (task_list[i].status === 'pending') {
            document.getElementById('pendingList').innerHTML +=
                '<h4>' + task_list[i].staff + (task_list[i].isRejected ? '<span class="badge badge-secondary">Rejected</span>' : '') + '</h4>' +
                '<div>' + task_list[i].description + '</div>' +
                '<div class="mt-2">' + 'Start date: ' + task_list[i].start_date + '</div>' +
                '<div>' + 'End date: ' + task_list[i].end_date + '</div>' +
                '<select onchange="getStatus(event)" class="form-control mt-2">' +
                '<option selected disabled>Select status</option>' +
                '<option value="doing">doing</option>' +
                '<option value="done">done</option>' +
                '</select>' +
                '<button onclick="editTask(' + task_list[i].id + ')" type="button" class="btn btn-warning text-white mt-3 px-3">Send</button>' +
                '<button onclick="deleteTask(' + task_list[i].id + ')" type="button" class="btn btn-danger text-white mt-3 ml-3 px-3">Delete</button>' +
                '<hr>'
        } else if (task_list[i].status === 'doing') {
            document.getElementById('doingList').innerHTML +=
                '<h4>' + task_list[i].staff + (task_list[i].isRejected ? '<span class="badge badge-secondary">Rejected</span>' : '') + '</h4>' +
                '<div>' + task_list[i].description + '</div>' +
                '<div class="mt-2">' + 'Start date: ' + task_list[i].start_date + '</div>' +
                '<div>' + 'End date: ' + task_list[i].end_date + '</div>' +
                '<select onchange="getStatus(event)" class="form-control mt-2">' +
                '<option selected disabled>Select status</option>' +
                '<option value="done">done</option>' +
                '<option value="pending">pending</option>' +
                '</select>' +
                '<button onclick="editTask(' + task_list[i].id + ')" type="button" class="btn btn-warning text-white mt-3 px-3">Send</button>' +
                '<button onclick="deleteTask(' + task_list[i].id + ')" type="button" class="btn btn-danger text-white mt-3 ml-3 px-3">Delete</button>' +
                '<hr>'
        } else if (task_list[i].status === 'done') {
            document.getElementById('successList').innerHTML +=
                '<h4>' + task_list[i].staff + (task_list[i].isRejected ? '<span class="badge badge-secondary">Rejected</span>' : '') + '</h4>' +
                '<div>' + task_list[i].description + '</div>' +
                '<div class="mt-2">' + 'Start date: ' + task_list[i].start_date + '</div>' +
                '<div>' + 'End date: ' + task_list[i].end_date + '</div>' +
                '<button onclick="rejectedTask(' + task_list[i].id + ')" type="button" class="btn btn-secondary text-white mt-3 px-3">Rejected</button>' +
                '<hr>'
        } else {
            document.getElementById('rejectedList').innerHTML +=
                '<h4>' + task_list[i].staff + '</h4>' +
                '<div>' + task_list[i].description + '</div>' +
                '<div class="mt-2">' + 'Start date: ' + task_list[i].start_date + '</div>' +
                '<div>' + 'End date: ' + task_list[i].end_date + '</div>' +
                '<select onchange="getStatus(event)" class="form-control mt-2">' +
                '<option selected disabled>Select status</option>' +
                '<option value="done">done</option>' +
                '<option value="doing">doing</option>' +
                '<option value="pending">pending</option>' +
                '</select>' +
                '<button onclick="editTask(' + task_list[i].id + ')" type="button" class="btn btn-warning text-white mt-3 px-3">Send</button>' +
                '<hr>'
        }
    }
}

function addTask() {
    var task_id = task_list.length + 1;
    var newList = {
        id: '', description: '', staff: '', start_date: '', end_date: '', status: ''
    };
    var taskStaff = document.forms['myForm']['staff'].value;
    var taskDesc = document.forms['myForm']['description'].value;
    var taskStarted = document.forms['myForm']['start_date'].value;
    var taskEnded = document.forms['myForm']['end_date'].value;
    var taskStatus = document.forms['myForm']['status'].value;

    if (taskStaff !== '' && taskDesc !== '' && taskStarted !== '' && taskEnded !== '' && taskStatus !== '') {
        newList = {
            id: task_id,
            description: taskDesc,
            staff: taskStaff,
            start_date: taskStarted,
            end_date: taskEnded,
            status: taskStatus,
            isRejected: false
        };
        task_list.push(newList);
        getTaskList();
        document.forms['myForm'].reset();
    } else {
        alert('Formani to\'ldiring');
    }

}

function getStatus(event) {
    defStatus = event.target.value;
}

function editTask(id) {
    let taskIndex = task_list.findIndex(obj => obj.id === id);
    if (defStatus !== null) {
        task_list[taskIndex].status = defStatus;
        defStatus = null;
        getTaskList()
    } else {
        alert('Statusni tanlang')
    }

}

function rejectedTask(id) {

    let taskIndex = task_list.findIndex(obj => obj.id === id);
    task_list[taskIndex].status = 'rejected';
    task_list[taskIndex].isRejected = true;
    console.log(task_list);
    defStatus = null;
    getTaskList()


}

function deleteTask(id) {
    let taskIndex = task_list.findIndex(obj => obj.id === id);
     task_list.splice(taskIndex,1);
     getTaskList();
}