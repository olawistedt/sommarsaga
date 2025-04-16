import random
import os
import platform

# ANSI escape-koder för färg
GRÖN = "\033[92m"
RÖD = "\033[91m"
RESET = "\033[0m"

def generera_additionsproblem(antal=20, min_tal=5, max_tal=19):
    problem = []
    total_summa = 0
    for _ in range(antal):
        tal1 = random.randint(min_tal, max_tal)
        tal2 = random.randint(min_tal, max_tal)
        summa = tal1 + tal2
        total_summa += summa
        problem.append(f"{tal1} + {tal2} = ")
    return problem, total_summa

# Skriv ut beroende på OS
def print_on_printer(fil):
    system = platform.system()
    if system == "Windows":
        notepad_path = "notepad.exe"
        os.system(f'start "" {notepad_path} /p "{fil}"')
    elif system == "Darwin":  # macOS
        os.system(f"lp {fil}")
    elif system == "Linux":
        os.system(f"lp {fil}")
    else:
        print("Utskrift stöds inte på detta operativsystem.")

# Generera problem och korrekt totalsumma
additionsproblem, korrekt_summa = generera_additionsproblem()

# Skriv ut problemen
# Skriv dem till en fil
filnamn = "uppgifter.txt"
with open(filnamn, "w", encoding="utf-8") as f:
    f.write("Räkneuppgifter\n\n")
    print("Räkna ut följande tal och ange summan av alla:")
    for i, p in enumerate(additionsproblem, 1):
        str = f"{i}. {p}\n"
        print(str)
        f.write(str)

print_on_printer(filnamn)

# Fråga användaren tills de skriver rätt
while True:
    try:
        användar_summa = int(input("\nAnge din totala summa: "))
        if användar_summa == korrekt_summa:
            print(f"{GRÖN}Rätt! Bra jobbat!{RESET}")
            break
        else:
            print(f"{RÖD}Fel. Försök igen.{RESET}")
    except ValueError:
        print(f"{RÖD}Vänligen skriv in ett heltal.{RESET}")
