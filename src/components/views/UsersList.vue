<template>
  <div class="table">
    <table v-if="!isMobileView" class="table__desktop">
      <thead>
        <tr>
          <th class="table__header">PLAYER</th>
          <th class="table__header">LEVEL</th>
          <th class="table__header">PLAYED CATEGORIES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, userIndex) in users" :key="userIndex" class="table__row">
          <td class="table__cell">{{ user.player }}</td>
          <td class="table__cell">{{ user.level }}</td>
          <td class="table__cell">{{ user.playedCategories }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="table__mobile">
      <div v-for="(user, userIndex) in users" :key="userIndex" class="table__mobile-row">
        <div class="table__mobile-header">{{ user.player }}</div>
        <div class="table__mobile-data">
          <span class="table__mobile-label">LEVEL:</span> {{ user.level }}
        </div>
        <div class="table__mobile-data">
          <span class="table__mobile-label">PLAYED CATEGORIES:</span> {{ user.playedCategories }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.generateUsers();
  },
  methods: {
    generateUsers() {
      const levels = ['N', 'P', 'E', 'M'];
      const randomName = () => {
        const names = ['John', 'Alice', 'Bob', 'Emma', 'Daniel', 'Olivia', 'James', 'Sophia', 'William', 'Isabella'];
        const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
        return `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`;
      };
      for (let i = 0; i < 20; i++) {
        this.users.push({
          player: randomName(),
          level: levels[Math.floor(Math.random() * levels.length)],
          playedCategories: 'Some random text'
        });
      }
    }
  },
  computed: {
    isMobileView() {
      return window.innerWidth <= 768;
    }
  }
};
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  overflow-x: auto;
}

.table__header {
  font-weight: bold;
}

.table__desktop {
  width: 100%;
  border-collapse: collapse;
}

.table__row:nth-child(even) {
  background-color: #f2f2f2;
}

.table__row:hover {
  background-color: #ddd;
}

.table__cell {
  padding: 8px;
  border: 1px solid #ddd;
}

.table__mobile {
  width: 100%;
}

.table__mobile-row {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.table__mobile-header {
  font-weight: bold;
  background-color: #333;
  color: white;
  padding: 10px;
}

.table__mobile-data {
  padding: 10px;
}

.table__mobile-label {
  font-weight: bold;
}
</style>
