/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function(){
  localStorage.setItem('data', JSON.stringify(data));
});

const storedData = localStorage.getItem('data');

if(storedData){
  const initialData = JSON.parse(storedData);
  Object.assign(data, initialData);
};
