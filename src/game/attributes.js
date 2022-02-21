// ToDo: List of Attributes


// ToDo: Attribute Probe


/*
def perform_attr_probe(self, attr: str, mod: int = 0):
        """ Performs an attribute probe with a modifier
        """
        print(f"The mighty {self.name} has incredible {self.attr[attr]} points in {attr}," +
              f"the modifier for this probe is {mod}")

        # Booleans indicating whether something was meisterlich or a patzer
        meister = False
        mega_meister = False
        patz = False
        mega_patz = False

        roll = randint(1, 20)
        self.rolls = roll
        res = self.attr[attr] - roll + mod
        print(f'The die shows a {roll}')

        if res >= 0 and roll != 20:  # Passed
            print(f"{self.name} has passed")
            passed = True
            if roll == 1:
                print('Will it be meisterlich?')
                roll2 = randint(1, 20)
                res2 = self.attr[attr] - roll2 + mod
                if res >= 0:
                    print('Yes!')
                    meister = True
                else:
                    print('No :(')
                if roll2 ==1:
                    mega_meister = True
        elif roll != 20:  # Failed by no patzer
            print(f"{self.name} has failed")
            passed = False
        elif roll == 20:  # Failed an CAN be a patzer
            print(f"{self.name} has failed, but will it be a complete disaster?")
            passed = False
            roll2 = randint(1, 20)
            res2 = self.attr[attr] - roll2 + mod
            if res <= 0:  # Patzer
                print("Yes....")
                patz = True
            else:  # Just a normal fail
                print("No, thanks to the Twelve")
            if roll2 == 20:  # Doppel-20 patzer
                mega_patz = True
        else:  # Dedugging...
            print('This should never happen :(')

        self.logger.info(f'attr_probe;{self.name};{attr};{self.attr[attr]};{mod};{roll};{res};{passed};{meister};{patz}')

        return passed, meister, mega_meister, patz , mega_patz
*/