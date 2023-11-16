const urlInput = document.getElementById('url');
const previewImage = document.getElementById('previewImage');
const form = document.querySelector('form');
const dataViewEntries = document.querySelector('[data-view="entries"]');
const dataViewEntryForm = document.querySelector('[data-view="entry-form"]');

urlInput.addEventListener('input', function () {
  previewImage.src = urlInput.value;
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const notesInput = document.getElementById('notes');

  const newEntry = {
    entryId: data.nextEntryId,
    title: titleInput.value,
    photourl: urlInput.value,
    notes: notesInput.value
  };

  data.entries.unshift(newEntry);
  data.nextEntryId++;

  form.reset();
  previewImage.src = 'images/placeholder-image-square.jpg';

});
