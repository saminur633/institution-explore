document.addEventListener('DOMContentLoaded', function() {
    // Get all the link elements
    const links = document.querySelectorAll('.link');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the data-target attribute value
            const target = link.getAttribute('data-target');

            // Redirect the user to the corresponding page based on the data-target attribute
            switch (target) {
                case 'about-institute':
                    window.location.href = 'about_institute.html';
                    break;
                case 'former-president':
                    window.location.href = 'former_president.html';
                    break;
                case 'managing-committee':
                    window.location.href = 'managing_committee.html';
                    break;
                case 'teachers-list':
                    window.location.href = 'teachers_list.html';
                    break;
                case 'staff-list':
                    window.location.href = 'staff_list.html';
                    break;
                case 'institute-infrastructure':
                    window.location.href = 'institute_infrastructure.html';
                    break;
                case 'mission-vision':
                    window.location.href = 'mission_vision.html';
                    break;
                case 'why-study-here':
                    window.location.href = 'why_study_here.html';
                    break;
                default:
                    console.error('Invalid data-target attribute value.');
            }
        });
    });
});
