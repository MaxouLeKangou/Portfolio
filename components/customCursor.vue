<script>
export default {
    data() {
        return {
            outerPosition: { x: -50, y: -50 },
            targetPosition: { x: window.innerWidth / 2, y: window.innerHeight / 2 }, // Centrer initialement le curseur
            isHovering: false,
            cursorSize: { width: 36, height: 36 }, // Taille par défaut du curseur
            cursorSizeLarge: { width: 56, height: 56 }, // Taille du curseur lors du survol
        };
    },
    mounted() {
        this.moveCursor();
        window.addEventListener('mousemove', this.updateTargetPosition);
        window.addEventListener('scroll', this.checkHoverDuringScroll, true);

        this.addOrRemoveEventListeners('add');
    },
    beforeUnmount() {
        window.removeEventListener('mousemove', this.updateTargetPosition);
        window.removeEventListener('scroll', this.checkHoverDuringScroll, true);

        this.addOrRemoveEventListeners('remove');
    },
    methods: {
        updateTargetPosition(e) {
            // Ajuster la position cible en fonction de la taille actuelle du curseur
            const cursorHalfWidth = this.isHovering ? this.cursorSizeLarge.width / 2 : this.cursorSize.width / 2;
            const cursorHalfHeight = this.isHovering ? this.cursorSizeLarge.height / 2 : this.cursorSize.height / 2;
            this.targetPosition.x = e.clientX - cursorHalfWidth;
            this.targetPosition.y = e.clientY - cursorHalfHeight;
            this.checkHoverStatus();
        },
        moveCursor() {
            const ease = 0.1;
            this.outerPosition.x += (this.targetPosition.x - this.outerPosition.x) * ease;
            this.outerPosition.y += (this.targetPosition.y - this.outerPosition.y) * ease;
            requestAnimationFrame(this.moveCursor.bind(this));
        },
        onLinkHover() {
            this.isHovering = true;
        },
        onLinkLeave() {
            this.isHovering = false;
        },
        checkHoverDuringScroll() {
            this.checkHoverStatus();
        },
        checkHoverStatus() {
            const elementUnderCursor = document.elementFromPoint(this.targetPosition.x + this.cursorSize.width / 2, this.targetPosition.y + this.cursorSize.height / 2);
            this.isHovering = elementUnderCursor && (elementUnderCursor.matches('a, button, .nav-menu') || elementUnderCursor.closest('a, button, .nav-menu'));
        },
        addOrRemoveEventListeners(action) {
            const method = action === 'add' ? 'addEventListener' : 'removeEventListener';
            document.querySelectorAll('a, button, .nav-menu').forEach(link => {
                link[method]('mouseenter', this.onLinkHover);
                link[method]('mouseleave', this.onLinkLeave);
            });
        }
    },
};
</script>



<template>
    <div class="cursor-container">
        <div class="cursor-ring" :class="{'cursor-ring-large': isHovering}" :style="{ transform: `translate3d(${outerPosition.x}px, ${outerPosition.y}px, 0)` }">
            <div class="cursor-ball" />
        </div>
    </div>
</template>
  

  
<style>
    .cursor-container {
        z-index: 1000;
        position: fixed;
        pointer-events: none;
        top: 0;
        left: 0;
    }
    .cursor-ring {
        width: 36px;
        height: 36px;
        border: 2px solid grey;
        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
    }
    .cursor-ball {
        width: 16px;
        height: 16px;
        background-color: white;
        border-radius: 50%;
    }
    .cursor-ring-large {
        width: 56px;
        height: 56px;
        border-radius: 28px;
        border: 2px solid #6B93CF;
    }
</style>
  