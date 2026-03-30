def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else:
        return 1def in1to10(n, outside_mode):
                    if outside_mode:
                        if n <= 1 or n >= 10:
                            return True
                        else:
                            return False
                    elif n >= 1 and n <= 10:
                        return True
                    else:
                        return False