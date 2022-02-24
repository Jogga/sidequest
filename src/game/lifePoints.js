/*
def check_pain(self):    # Check if wounded( in pain)
if self.LP > self.wundschwelle[0]:
    self.wounds = 0
elif self.LP <= self.wundschwelle[0] and self.LP > self.wundschwelle[1]:
    self.wounds = 1
elif self.LP <= self.wundschwelle[1] and self.LP > self.wundschwelle[2]:
    self.wounds = 2
elif 0 < self.LP <= self.wundschwelle[2]:
    self.wounds = 3
elif self.LP <= 0:
    print('YOU ARE DEAD')
    self.dead = True
    self.logger.info(f'{self.name};DEAD')
if self.wounds > 0:
    print(f'{self.name}: LEVEL(S) OF PAIN: {self.wounds} (-{self.wounds} AT/PA))')
else:
    print(f'{self.name}: HAS NO PAIN')

*/