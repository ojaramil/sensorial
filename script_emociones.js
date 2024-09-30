// script.js

document.addEventListener('DOMContentLoaded', () => {
    const moodForm = document.getElementById('mood-form');
    const moodHistory = document.getElementById('mood-history');
    let moods = [];

    // Cargar el historial al iniciar
    loadMoods();

    // Event Listener para el formulario
    moodForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const moodSelect = document.getElementById('mood');
        const notesInput = document.getElementById('notes');

        if (moodSelect.value === '') {
            alert('Por favor, selecciona un estado de ánimo.');
            return;
        }

        const newMood = {
            id: Date.now(), // ID único basado en el timestamp
            mood: moodSelect.value,
            notes: notesInput.value,
            date: new Date().toLocaleString()
        };

        moods.push(newMood);
        saveMoods();
        addMoodToHistory(newMood);
        moodForm.reset();
    });

    // Función para cargar los estados de ánimo del localStorage
    function loadMoods() {
        const storedMoods = localStorage.getItem('moods');
        if (storedMoods) {
            moods = JSON.parse(storedMoods);
            moods.forEach((mood) => {
                addMoodToHistory(mood);
            });
        }
    }

    // Función para guardar los estados de ánimo en localStorage
    function saveMoods() {
        localStorage.setItem('moods', JSON.stringify(moods));
    }

    // Función para agregar un estado de ánimo al historial visualmente
    function addMoodToHistory(mood) {
        const li = document.createElement('li');
        li.dataset.id = mood.id; // Asignamos el ID al elemento li

        li.innerHTML = `
            <p><strong>Fecha:</strong> ${mood.date}</p>
            <p><strong>Estado de Ánimo:</strong> ${mood.mood}</p>
            ${mood.notes ? `<p><strong>Notas:</strong> ${mood.notes}</p>` : ''}
            <div class="action-buttons">
                <button class="edit">✏️</button>
                <button class="delete">🗑️</button>
            </div>
        `;

        moodHistory.prepend(li);

        // Añadimos event listeners a los botones editar y eliminar
        const editButton = li.querySelector('.edit');
        const deleteButton = li.querySelector('.delete');

        editButton.addEventListener('click', () => {
            editMood(mood.id);
        });

        deleteButton.addEventListener('click', () => {
            deleteMood(mood.id);
        });
    }

    // Función para eliminar un estado de ánimo
    function deleteMood(id) {
        if (confirm('¿Estás seguro de que deseas eliminar esta entrada?')) {
            moods = moods.filter(mood => mood.id !== id);
            saveMoods();
            // Remover el elemento visualmente
            const liToRemove = moodHistory.querySelector(`li[data-id="${id}"]`);
            if (liToRemove) {
                moodHistory.removeChild(liToRemove);
            }
        }
    }

    // Función para editar un estado de ánimo
    function editMood(id) {
        const moodToEdit = moods.find(mood => mood.id === id);
        if (moodToEdit) {
            // Crear un formulario de edición
            const li = moodHistory.querySelector(`li[data-id="${id}"]`);
            const editForm = document.createElement('div');
            editForm.classList.add('edit-form');

            editForm.innerHTML = `
                <label for="edit-mood">Estado de Ánimo:</label>
                <select id="edit-mood" required>
                    <option value="">--Seleccionar--</option>
                    <option value="Feliz" ${moodToEdit.mood === 'Feliz' ? 'selected' : ''}>😊 Feliz</option>
                    <option value="Triste" ${moodToEdit.mood === 'Triste' ? 'selected' : ''}>😢 Triste</option>
                    <option value="Ansioso" ${moodToEdit.mood === 'Ansioso' ? 'selected' : ''}>😰 Ansioso</option>
                    <option value="Enojado" ${moodToEdit.mood === 'Enojado' ? 'selected' : ''}>😠 Enojado</option>
                    <option value="Emocionado" ${moodToEdit.mood === 'Emocionado' ? 'selected' : ''}>😃 Emocionado</option>
                </select>

                <label for="edit-notes">Notas:</label>
                <textarea id="edit-notes" rows="3">${moodToEdit.notes}</textarea>

                <button type="button" class="save-edit">Guardar Cambios</button>
            `;

            // Remplazamos el contenido del li con el formulario de edición
            li.innerHTML = '';
            li.appendChild(editForm);

            // Event Listener para guardar los cambios
            const saveButton = editForm.querySelector('.save-edit');
            saveButton.addEventListener('click', () => {
                const editedMood = editForm.querySelector('#edit-mood').value;
                const editedNotes = editForm.querySelector('#edit-notes').value;

                if (editedMood === '') {
                    alert('Por favor, selecciona un estado de ánimo.');
                    return;
                }

                // Actualizamos el objeto en el array moods
                moodToEdit.mood = editedMood;
                moodToEdit.notes = editedNotes;
                saveMoods();

                // Volvemos a renderizar la entrada editada
                li.innerHTML = `
                    <p><strong>Fecha:</strong> ${moodToEdit.date}</p>
                    <p><strong>Estado de Ánimo:</strong> ${moodToEdit.mood}</p>
                    ${moodToEdit.notes ? `<p><strong>Notas:</strong> ${moodToEdit.notes}</p>` : ''}
                    <div class="action-buttons">
                        <button class="edit">✏️</button>
                        <button class="delete">🗑️</button>
                    </div>
                `;

                // Reasignamos los event listeners
                const editButton = li.querySelector('.edit');
                const deleteButton = li.querySelector('.delete');

                editButton.addEventListener('click', () => {
                    editMood(id);
                });

                deleteButton.addEventListener('click', () => {
                    deleteMood(id);
                });
            });
        }
    }
});

