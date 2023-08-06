<!-- src/components/Button.vue -->
<template>
  <button @click="handleClick" :disabled="isDisabled" :class="[size, type, varaint]" :style="[`border-radius: ${round}`]">
    <slot v-if="!loading"></slot>
    <span
      v-show="loading"
      class="loading-spinner"
      :style="[`width: ${loading_wh}; height: ${loading_wh}`]"
    ></span>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: (value) => {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return ['primary', 'secondary', 'outline'].includes(value)
      }
    },
    round: {
      type: String,
      default: 'unset'
    },
    varaint: {
      type: String,
      default: 'contain',
      validator: (value) => {
        return ['text', 'contain', 'outline'].includes(value)
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    loading_wh: {
      type: String,
      default: '25px'
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
/* Styles for Small Button */
.small {
  padding: 4px 12px;
  font-size: 14px;
}

/* Styles for Regular/Medium Button */
.medium {
  padding: 8px 16px;
  font-size: 16px;
}

/* Styles for Large Button */
.large {
  padding: 12px 24px;
  font-size: 18px;
}

/* Additional Styles */
/* You can add more styles to customize the appearance of your buttons */

/* Example: Primary Button Style */
.primary {
  background-color: #007bff;
  color: #fff;
}

/* Example: Secondary Button Style */
.secondary {
  background-color: #6c757d;
  color: #fff;
}

.error {
  background-color: #dc3545;
  color: #fff;
}

/* Example: Outline Button Style */
.outline {
  border: 2px solid #007bff;
  background-color: transparent;
  color: #007bff;
}
.text {
  background-color: transparent;
  color: #007bff;
  border: none;
}
.contained {
  background-color: #007bff;
  color: #fff;
}
.loading-spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  display: inline-block;
  width: 20px; /* Adjust the width of the loading spinner */
  height: 20px; /* Adjust the height of the loading spinner */
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-left: 2px solid #007bff; /* Adjust the color of the loading spinner */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
button:disabled {
  opacity: 0.5; /* You can adjust the opacity to make it visually indicate the disabled state */
  cursor: not-allowed; /* Change the cursor to indicate the button is not clickable */
}
</style>
