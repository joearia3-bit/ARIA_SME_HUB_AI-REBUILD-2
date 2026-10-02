/**
 * ARIA SME HUB - Phase 1 JavaScript
 * Clean vanilla JS handling homepage interactions, modal navigation,
 * file upload preview, and placeholder states without frameworks.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===================================================================
  // DOM ELEMENT REFERENCES
  // ===================================================================

  // Main Action Buttons
  const btnScan = document.getElementById('btn-scan');
  const btnTalk = document.getElementById('btn-talk');
  const btnChat = document.getElementById('btn-chat');
  const btnIdea = document.getElementById('btn-idea');
  const btnMarkets = document.getElementById('btn-markets');
  const btnSupport = document.getElementById('btn-support');

  // Status Banner
  const statusBanner = document.getElementById('status-banner');
  const statusMessage = document.getElementById('status-message');
  const closeBannerBtn = document.getElementById('close-banner-btn');

  // Modals
  const modalScan = document.getElementById('modal-scan');
  const modalChat = document.getElementById('modal-chat');
  const modalInfo = document.getElementById('modal-info');

  // Close & Back Modal Buttons
  const closeScanModal = document.getElementById('close-scan-modal');
  const backScanModal = document.getElementById('back-scan-modal');
  const closeChatModal = document.getElementById('close-chat-modal');
  const backChatModal = document.getElementById('back-chat-modal');
  const closeInfoModal = document.getElementById('close-info-modal');
  const backInfoModal = document.getElementById('back-info-modal');

  // Scan Modal Elements
  const btnTakePhoto = document.getElementById('btn-take-photo');
  const btnChooseImage = document.getElementById('btn-choose-image');
  const fileInput = document.getElementById('file-input');
  const scanAlert = document.getElementById('scan-alert');
  const previewContainer = document.getElementById('preview-container');
  const imagePreview = document.getElementById('image-preview');

  // Chat Modal Elements
  const chatMessages = document.getElementById('chat-messages');
  const chatTextInput = document.getElementById('chat-text-input');
  const btnChatSend = document.getElementById('btn-chat-send');
  const btnChatClear = document.getElementById('btn-chat-clear');

  // Info Modal Elements
  const infoModalText = document.getElementById('info-modal-text');
  const infoModalIcon = document.getElementById('info-modal-icon');

  // Constant Messages
  const MSG_CHAT_INITIAL = "ARIA AI backend is not yet connected. You can still explore the other tools on the homepage.";
  const MSG_CAMERA_WARNING = "Camera feature not yet connected. Use Choose Image instead.";
  const MSG_IMAGE_PREVIEW = "Image preview loaded. AI image analysis is not yet connected.";

  // ===================================================================
  // HELPER FUNCTIONS
  // ===================================================================

  /**
   * Opens a specified modal overlay
   * @param {HTMLElement} modal 
   */
  function openModal(modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  /**
   * Closes a specified modal overlay
   * @param {HTMLElement} modal 
   */
  function closeModal(modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
  }

  /**
   * Shows the dynamic Info/Placeholder modal with custom text and icon
   * @param {string} text 
   * @param {string} icon 
   */
  function showInfoModal(text, icon = 'ℹ️') {
    infoModalText.textContent = text;
    infoModalIcon.textContent = icon;
    openModal(modalInfo);
  }

  /**
   * Display a status banner at the top of the homepage
   * @param {string} message 
   * @param {string} type ('warning', 'info', 'success')
   */
  function showBanner(message, type = 'info') {
    statusMessage.textContent = message;
    statusBanner.className = `status-banner ${type}`;
    statusBanner.classList.remove('hidden');
  }

  /**
   * Hide the status banner
   */
  function hideBanner() {
    statusBanner.classList.add('hidden');
  }

  /**
   * Reset Chat to initial clean state
   */
  function resetChat() {
    chatMessages.innerHTML = '';
    const initialBubble = document.createElement('div');
    initialBubble.className = 'chat-bubble system';
    initialBubble.textContent = MSG_CHAT_INITIAL;
    chatMessages.appendChild(initialBubble);
    chatTextInput.value = '';
  }

  /**
   * Reset Scan Modal state
   */
  function resetScanModal() {
    scanAlert.classList.add('hidden');
    scanAlert.className = 'alert-box hidden';
    scanAlert.textContent = '';
    previewContainer.classList.add('hidden');
    imagePreview.src = '';
    fileInput.value = '';
  }

  // Initialize Chat Log on startup
  resetChat();

  // ===================================================================
  // EVENT LISTENERS - HOMEPAGE NAVIGATION & ACTIONS
  // ===================================================================

  // 1. SCAN WITH ARIA
  btnScan.addEventListener('click', () => {
    resetScanModal();
    openModal(modalScan);
  });

  // 2. TALK WITH ARIA
  btnTalk.addEventListener('click', () => {
    showInfoModal("Voice input is not yet connected", "🎤");
  });

  // 3. CHAT WITH ARIA
  btnChat.addEventListener('click', () => {
    openModal(modalChat);
  });

  // 4. FIND A BUSINESS IDEA
  btnIdea.addEventListener('click', () => {
    showInfoModal("Business idea tool coming soon", "💡");
  });

  // 5. FIND MARKETS
  btnMarkets.addEventListener('click', () => {
    showInfoModal("Market discovery coming soon", "🛒");
  });

  // 6. FIND SUPPORT
  btnSupport.addEventListener('click', () => {
    showInfoModal("Support directory coming soon", "🤝");
  });

  // Close Banner Button
  closeBannerBtn.addEventListener('click', hideBanner);

  // ===================================================================
  // MODAL CLOSE & BACK BUTTON HANDLERS
  // ===================================================================

  closeScanModal.addEventListener('click', () => closeModal(modalScan));
  backScanModal.addEventListener('click', () => closeModal(modalScan));

  closeChatModal.addEventListener('click', () => closeModal(modalChat));
  backChatModal.addEventListener('click', () => closeModal(modalChat));

  closeInfoModal.addEventListener('click', () => closeModal(modalInfo));
  backInfoModal.addEventListener('click', () => closeModal(modalInfo));

  // Close modals when clicking overlay backdrop
  [modalScan, modalChat, modalInfo].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ===================================================================
  // SCAN WITH ARIA SUBMENU LOGIC
  // ===================================================================

  // Take Photo Trigger
  btnTakePhoto.addEventListener('click', () => {
    scanAlert.textContent = MSG_CAMERA_WARNING;
    scanAlert.className = 'alert-box warning';
    scanAlert.classList.remove('hidden');
  });

  // Choose Image Button -> Triggers Hidden Native Input
  btnChooseImage.addEventListener('click', () => {
    fileInput.click();
  });

  // Native File Input Selection Event
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        previewContainer.classList.remove('hidden');
        
        // Success notification message requirement
        scanAlert.textContent = MSG_IMAGE_PREVIEW;
        scanAlert.className = 'alert-box success';
        scanAlert.classList.remove('hidden');
      };

      reader.onerror = function() {
        scanAlert.textContent = "Error reading image file. Please try again.";
        scanAlert.className = 'alert-box warning';
        scanAlert.classList.remove('hidden');
      };

      reader.readAsDataURL(file);
    }
  });

  // ===================================================================
  // CHAT WITH ARIA LOGIC
  // ===================================================================

  function handleSendMessage() {
    const userText = chatTextInput.value.trim();
    if (!userText) return;

    // Append User Message
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = userText;
    chatMessages.appendChild(userBubble);

    // Clear input
    chatTextInput.value = '';

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // System Fallback Response (no fake AI)
    setTimeout(() => {
      const systemBubble = document.createElement('div');
      systemBubble.className = 'chat-bubble system';
      systemBubble.textContent = "ARIA AI backend is not yet connected. Your message was received, but AI processing is disabled in Phase 1.";
      chatMessages.appendChild(systemBubble);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 400);
  }

  btnChatSend.addEventListener('click', handleSendMessage);

  // Send on Enter (without Shift)
  chatTextInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  });

  // Clear Chat History
  btnChatClear.addEventListener('click', resetChat);

});
