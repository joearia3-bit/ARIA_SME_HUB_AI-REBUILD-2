# ARIA SME HUB — Phase 1 Interface

**ARIA SME HUB** is a mobile-first, AI-powered business opportunity platform designed specifically for Papua New Guinea. It empowers unemployed individuals, young entrepreneurs, farmers, fishermen, and craftspeople to discover income-generating opportunities from resources they already possess.

---

## 🎯 Phase 1 Scope & Status

Phase 1 focuses exclusively on building a complete, highly accessible, interactive mobile-first interface. **No external AI backends, image models, or voice recognition APIs are connected in Phase 1.** Clean placeholder states and clear feedback mechanisms are provided across all options.

### ✅ Working Features Delivered in Phase 1:

1. **Branding & Layout:**
   - Prominent ARIA SME HUB branding, subtitles, and primary messaging.
   - Clean Pacific/PNG-inspired color scheme (Light blue background `#e8f4f8`, gold feature cards `#f59e0b`, high-contrast dark text, green for success, red for warnings, white cards).
   - High-contrast, large touch targets (minimum 48px–64px height) optimized for mobile and Android web browsers.

2. **Homepage Navigation (6 Core Feature Buttons):**
   - **📷 SCAN WITH ARIA:** Opens interactive modal with photo options.
   - **🎤 TALK WITH ARIA:** Triggers placeholder display: `"Voice input is not yet connected"`.
   - **💬 CHAT WITH ARIA:** Opens full working chat interface screen.
   - **💡 FIND A BUSINESS IDEA:** Triggers placeholder display: `"Business idea tool coming soon"`.
   - **🛒 FIND MARKETS:** Triggers placeholder display: `"Market discovery coming soon"`.
   - **🤝 FIND SUPPORT:** Triggers placeholder display: `"Support directory coming soon"`.

3. **Scan With ARIA Submenu:**
   - **📷 TAKE PHOTO:** Warns user with: `"Camera feature not yet connected. Use Choose Image instead."`
   - **🖼️ CHOOSE IMAGE:** Hidden native file input (`type="file" accept="image/*"`). Allows picking any image from local storage. Shows immediate image preview and success notification: `"Image preview loaded. AI image analysis is not yet connected."`

4. **Chat With ARIA Interface:**
   - Displays required initial default message: `"ARIA AI backend is not yet connected. You can still explore the other tools on the homepage."`
   - Input field with **Send** (triggers message logging and explicit offline backend notice) and **Clear** buttons (resets conversation back to initial state).

5. **Navigation & Accessibility:**
   - Clear **Back to Main Menu** and **Close (✕)** buttons on all views/modals.
   - Backdrop overlay dismiss support.
   - Accessible font sizes and visual contrast.

---

## 📁 Project Structure

