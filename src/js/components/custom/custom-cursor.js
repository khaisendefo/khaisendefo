export function customCursor() {
  document.addEventListener('DOMContentLoaded', function() {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: (window.innerWidth / 2),
      endY: (window.innerHeight / 2),
      cursorVisible: false, 
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot'),
      $outline: document.querySelector('.cursor-dot-outline'),
    
      init: function() {
        if (window.innerWidth >= 768) {
          this.dotSize = this.$dot.offsetWidth;
          this.outlineSize = this.$outline.offsetWidth;
    
          this.setupEventListeners();
          this.animateDotOutline();
        } else {
          this.$dot.style.display = 'none';
          this.$outline.style.display = 'none';
        }
      },
    
      setupEventListeners: function() {
        var self = this;
    
        document.querySelectorAll('.card').forEach(function(el) {
          el.addEventListener('mouseenter', function() {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
          });
    
          el.addEventListener('mouseleave', function() {
            self.cursorVisible = false;
            self.toggleCursorVisibility();
          });
    
          el.addEventListener('mousemove', function(e) {
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
          });
        });
    
        document.querySelectorAll('.card a').forEach(function(el) {
          el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });
    
        document.querySelectorAll('.card').forEach(function(el) {
          el.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });
    
        window.addEventListener('resize', function() {
          if (window.innerWidth < 768) {
            self.$dot.style.display = 'none';
            self.$outline.style.display = 'none';
          } else {
            self.$dot.style.display = 'block';
            self.$outline.style.display = 'block';
          }
        });
      },
    
      animateDotOutline: function() {
        var self = this;
    
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
    
        requestAnimationFrame(this.animateDotOutline.bind(self));
      },
    
      toggleCursorSize: function() {
        var self = this;
    
        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      },
    
      toggleCursorVisibility: function() {
        var self = this;
    
        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      }
    };
    
    cursor.init();
  });
}

