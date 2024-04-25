const ICONS = {
  instagram: (
    <path d="M16.004 7.797c-4.54 0-8.203 3.662-8.203 8.203s3.662 8.203 8.203 8.203 8.203-3.662 8.203-8.203c0-4.54-3.662-8.203-8.203-8.203zM16.004 21.333c-2.934 0-5.333-2.392-5.333-5.333s2.392-5.333 5.333-5.333 5.333 2.392 5.333 5.333c0 2.941-2.399 5.333-5.333 5.333zM26.455 7.462c0 1.064-0.857 1.913-1.913 1.913-1.064 0-1.913-0.857-1.913-1.913s0.857-1.913 1.913-1.913c1.057 0 1.913 0.857 1.913 1.913zM31.887 9.404c-0.121-2.563-0.707-4.833-2.584-6.703-1.87-1.87-4.14-2.456-6.703-2.584-2.641-0.15-10.558-0.15-13.2 0-2.556 0.121-4.826 0.707-6.703 2.577s-2.456 4.141-2.584 6.703c-0.15 2.641-0.15 10.558 0 13.2 0.121 2.563 0.707 4.833 2.584 6.703s4.141 2.456 6.703 2.584c2.641 0.15 10.558 0.15 13.2 0 2.563-0.121 4.833-0.707 6.703-2.584 1.87-1.87 2.456-4.141 2.584-6.703 0.15-2.641 0.15-10.551 0-13.193zM28.475 25.431c-0.557 1.399-1.635 2.477-3.041 3.041-2.106 0.835-7.103 0.642-9.43 0.642s-7.332 0.186-9.43-0.642c-1.399-0.557-2.477-1.635-3.041-3.041-0.835-2.106-0.643-7.103-0.643-9.431s-0.186-7.332 0.643-9.43c0.557-1.399 1.635-2.477 3.041-3.041 2.106-0.835 7.103-0.643 9.43-0.643s7.332-0.186 9.43 0.643c1.399 0.557 2.477 1.635 3.041 3.041 0.835 2.106 0.643 7.103 0.643 9.43s0.193 7.332-0.643 9.431z"></path>
  ),

  facebook: (
    <path d="M23.446 18l0.889-5.791h-5.557v-3.758c0-1.584 0.776-3.129 3.265-3.129h2.526v-4.931c0 0-2.293-0.391-4.484-0.391-4.576 0-7.567 2.774-7.567 7.795v4.414h-5.087v5.791h5.087v14h6.261v-14h4.668z"></path>
  ),
  github: (
    <path d="M10.703 25.522c0 0.129-0.148 0.232-0.335 0.232-0.213 0.019-0.361-0.084-0.361-0.232 0-0.129 0.148-0.232 0.335-0.232 0.194-0.019 0.361 0.084 0.361 0.232zM8.697 25.232c-0.045 0.129 0.084 0.277 0.277 0.316 0.168 0.065 0.361 0 0.4-0.129s-0.084-0.277-0.277-0.336c-0.168-0.045-0.355 0.019-0.4 0.148zM11.548 25.122c-0.187 0.045-0.316 0.168-0.297 0.316 0.019 0.129 0.187 0.213 0.381 0.168 0.187-0.045 0.316-0.168 0.297-0.297-0.019-0.123-0.194-0.206-0.381-0.187zM15.794 0.4c-8.948 0-15.794 6.794-15.794 15.742 0 7.155 4.503 13.277 10.935 15.432 0.826 0.148 1.116-0.361 1.116-0.781 0-0.4-0.019-2.607-0.019-3.961 0 0-4.516 0.968-5.465-1.923 0 0-0.736-1.877-1.794-2.361 0 0-1.477-1.013 0.103-0.993 0 0 1.606 0.129 2.49 1.664 1.413 2.49 3.781 1.774 4.703 1.348 0.148-1.032 0.568-1.748 1.032-2.174-3.606-0.4-7.245-0.923-7.245-7.129 0-1.774 0.49-2.665 1.523-3.8-0.168-0.419-0.716-2.148 0.168-4.381 1.348-0.419 4.452 1.742 4.452 1.742 1.29-0.361 2.677-0.548 4.052-0.548s2.761 0.187 4.052 0.548c0 0 3.103-2.168 4.452-1.742 0.884 2.239 0.336 3.961 0.168 4.381 1.032 1.142 1.664 2.032 1.664 3.8 0 6.226-3.8 6.723-7.406 7.129 0.594 0.51 1.097 1.477 1.097 2.993 0 2.174-0.019 4.865-0.019 5.394 0 0.419 0.297 0.929 1.116 0.781 6.452-2.142 10.826-8.264 10.826-15.419 0-8.948-7.258-15.742-16.206-15.742zM6.271 22.651c-0.084 0.064-0.064 0.213 0.045 0.335 0.103 0.103 0.252 0.148 0.335 0.065 0.084-0.065 0.064-0.213-0.045-0.336-0.103-0.103-0.252-0.148-0.335-0.064zM5.574 22.129c-0.045 0.084 0.019 0.187 0.148 0.252 0.103 0.064 0.232 0.045 0.277-0.045 0.045-0.084-0.019-0.187-0.148-0.252-0.129-0.039-0.232-0.019-0.277 0.045zM7.665 24.425c-0.103 0.084-0.064 0.277 0.084 0.4 0.148 0.148 0.336 0.168 0.419 0.065 0.084-0.084 0.045-0.277-0.084-0.4-0.142-0.148-0.335-0.168-0.419-0.065zM6.929 23.477c-0.103 0.064-0.103 0.232 0 0.381s0.277 0.213 0.361 0.148c0.103-0.084 0.103-0.252 0-0.4-0.090-0.148-0.258-0.213-0.361-0.129z"></path>
  ),

  twitter: (
    <path d="M28.711 9.482c0.020 0.284 0.020 0.569 0.020 0.853 0 8.67-6.599 18.66-18.66 18.66-3.716 0-7.168-1.076-10.071-2.944 0.528 0.061 1.036 0.081 1.584 0.081 3.066 0 5.888-1.036 8.142-2.802-2.883-0.061-5.3-1.949-6.132-4.548 0.406 0.061 0.812 0.102 1.239 0.102 0.589 0 1.178-0.081 1.726-0.223-3.005-0.609-5.259-3.249-5.259-6.437v-0.081c0.873 0.487 1.888 0.792 2.964 0.832-1.766-1.178-2.924-3.188-2.924-5.462 0-1.218 0.325-2.335 0.893-3.31 3.228 3.98 8.081 6.579 13.523 6.863-0.101-0.487-0.162-0.995-0.162-1.502 0-3.614 2.924-6.558 6.558-6.558 1.888 0 3.594 0.792 4.792 2.071 1.482-0.284 2.904-0.833 4.163-1.584-0.487 1.523-1.523 2.802-2.883 3.614 1.32-0.142 2.599-0.508 3.777-1.015-0.893 1.299-2.010 2.457-3.289 3.391z"></path>
  ),
};

export default ICONS;
