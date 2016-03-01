var Template = (obj, number) => {
    return '<label for="' + obj.status + number + '" class="time-table-elem ' + obj.status + '">' +
                '<input class="toggle hidden" id="' + obj.status + number + '"name="'+ obj.time + '" type="checkbox"' +
                    (obj.status == "booked" ? 'checked' : '') + 'data-time"=' + obj.time+ '">' +
                '<label for="' + obj.status + number + '" class="fancy pull-left">' +
                    '<i><span class="check abs"></span></i>' +
                '</label>' +
                '<span class="white">' + obj.time + '</span>' +
            '</label>'
};

export default Template;